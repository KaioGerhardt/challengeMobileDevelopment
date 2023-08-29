class Users{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    loginValidate(email, password){
        console.log("log na funcao loginValidate");
    }
}

module.exports = Users