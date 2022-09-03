import { Request, Response, NextFunction } from "express";
const createError = require("http-errors");

function Guard(this: any): void {
    const defaults = {
        requestProperty: "auth",
        permissionsProperty: "permission_profile",
    };
    this._options = Object.assign({}, defaults);
}

Guard.prototype = {
    check: function (this: any, required: [string] | string) {
        const _middleware = (
            req: Request,
            res: Response,
            next: NextFunction
        ) => {
            const self = this;
            const options = self._options;

            if (!options.requestProperty)
                throw new Error(
                    "requestProperty hasn't been defined. Check your configuration."
                );

            const user = req[options.requestProperty];
            if (!user)
                return next(
                    new Error(
                        `user object ${options.requestProperty} was not found. Check your configuration.`
                    )
                );

            let permissionProfile = user[options.permissionsProperty];
            if (!permissionProfile)
                return next(
                    new Error(
                        `Could not find ${options.permissionsProperty} for user. Bad configuration?`
                    )
                );

            if (typeof permissionProfile !== "string")
                new Error(
                    `${options.permissionsProperty} should be string. Bad format?`
                );

            const permissions = new Set();

            if (typeof required === "string") required = [required];

            const sufficient = required.some((x) => permissions.has(x));
            next(!sufficient ? createError(403, "permission_denied") : null);
        };

        _middleware.bind(this);
        _middleware.unless = require("express-unless");
        return _middleware;
    },
};

module.exports = function () {
    return new Guard();
};
