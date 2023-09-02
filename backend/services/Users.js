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

            if(userValidate != []){
                let tokenJWT = TokenManager.generateToken(userValidate[0]);
                returnData = tokenJWT;
            }else{
                returnData = false;
            }
            console.log("result login validate", userValidate);
        } catch (error) {
            console.error("ERROR loginValidate: ", error);
        } finally {
            this.DatabaseConnection.close();
        }

        return returnData;
    }

    async createUser(name) {
        try{
            await this.DatabaseConnection.query(`INSERT INTO user(name, email, password) VALUES ('${name}', '${this.email}', '${this.password}')`);
        }catch(error){
            console.log("ERROR createUser: ", error);
        }finally{
            this.DatabaseConnection.close();
        }
    }
}

module.exports = Users