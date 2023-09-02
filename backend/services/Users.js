const Database = require('../db');

class Users{
    constructor(email, password){
        this.email = email;
        this.password = password;

        this.DatabaseConnection = new Database();
    }

    loginValidate(email, password){
        console.log("log na funcao loginValidate");
    }
}

module.exports = Users