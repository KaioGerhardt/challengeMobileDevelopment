const express = require('express');
const router = express.Router();
const Users = require('./services/Users');
const TokenManager = require('./services/TokenManager');

router.post('/login', async (req, res) => {
    try{
        let requestData = req.body;
        if(requestData.email != undefined &&  requestData.password != undefined){
            let user = new Users(requestData.email, requestData.password);
            let result = await user.loginValidate();

            if(result){
                TokenManager.saveTokenSession(req, result);
                console.log("token session -> ", req.session.token);
                res.status(200).json("200");
            }else{
                res.status(401).json("Usuario nao encontrado!");
            }
        }
    }catch(error){
        console.error("Error: ", error);
        res.status(500).json(error);
    }
});

module.exports = router;