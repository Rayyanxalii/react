import conf from "../conf/conf.js";
import { Client, Account, ID } from 'appwrite'

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create({ userID: ID.unique(), email, password, name });
            if (userAccount) {
                // calling login function when account is created
                return this.loginAccount({ email, password })
            }
            else {
                return userAccount;

            }
        } catch (error) {
            throw error;
        }
    }

    async loginAccount({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({ email, password });

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serivce error: ", error);
        }
        return null;
    }


    async LogOut() {

        try {
            return await this.account.deleteSessions();

        } catch (error) {
            console.log("Appwrite logout error: ", error)
        }
    }

}

const authService = new AuthService();
export default authService;