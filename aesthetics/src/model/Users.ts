export class Users {
    email: String;
    password: String;
    name: String;
    isActive: number;
    lastAccess: Date;

    constructor(email: String, password: String){
        this.email = email;
        this.password = password;
        this.name = "";
        this.isActive = 0;
        this.lastAccess = new Date(1, 0, 1);
    }

}