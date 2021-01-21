export class User {
    constructor(
        public id: string,
        public email: string,
        // public roles: string,
        private _accessToken: string,
        private _tokenExpirationDate: Date) { }

    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._accessToken;
    }
}