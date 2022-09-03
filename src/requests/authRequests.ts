import { Joi } from "express-validation";
// import { object } from "joi";

export const login = {
    body: Joi.object().keys({
        user_name: Joi.string().required().email().lowercase(),
        password: Joi.string().required(),
    }),
};
