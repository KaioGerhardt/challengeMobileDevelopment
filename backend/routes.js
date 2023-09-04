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

            console.log("log result -> ", result);
            if(result){
                TokenManager.saveTokenSession(req, result);
                res.status(200).json({isLoged: true, token: result});
            }else{
                res.status(401).json({isLoged: false});
            }
        }
    }catch(error){
        console.error("Error: ", error);
        res.status(500).json(error);
    }
});

module.exports = router;