export default class AuthService {
    loggedIn = false;

    public isAuthenticated = async (): Promise<boolean> => {
        const promise: Promise<boolean> = new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.loggedIn), 800);
        });
        return promise;
    };
    public login = async () => (this.loggedIn = true);
    public logout = async () => (this.loggedIn = false);
}
