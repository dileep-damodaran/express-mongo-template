function AppResponse(success: boolean, data: any, error: string) {
    (this._success = success), (this._data = data), (this._error = error);
}

export { AppResponse };
