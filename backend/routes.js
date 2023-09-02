const express = require('express');
const router = express.Router();
const Users = require('./services/Users');

router.post('/login', (req, res) => {
    try{
        let requestData = req.body;
        let user = new Users(requestData.email, requestData.password);
        user.loginValidate();

        res.status(200).json("ok");
    }catch(error){
        res.status(500).json(error);
    }
});

module.exports = router;