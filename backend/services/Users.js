const Database = require('../db');
const TokenManager = require('../services/TokenManager');

class Users {
    constructor(email, password) {
        this.email = email;
        this.password = password;

        this.DatabaseConnection = new Database();
    }

    async loginValidate() {
        let returnData = null;
        try {
            let userValidate = await this.DatabaseConnection.query(`SELECT idUser, email, name FROM user WHERE email = '${this.email}' AND password = '${this.password}';`);

            if(JSON.stringify(userValidate) != '[]'){
                let tokenJWT = TokenManager.generateToken(userValidate[0]);
                returnData = tokenJWT;
            }else{
                returnData = false;
            }
        } catch (error) {
            console.error("ERROR loginValidate: ", error);
        } finally {
            this.DatabaseConnection.close();
        }

        return returnData;
    }

    async createUser(name) {
        try{
            let isCreated = await this.DatabaseConnection.query(`INSERT INTO user(name, email, password) VALUES ('${name}', '${this.email}', '${this.password}')`);
            return true;

        }catch(error){
            console.log("ERROR createUser: ", error);
            return false;
        }finally{
            this.DatabaseConnection.close();
        }
    }
}

module.exports = Users