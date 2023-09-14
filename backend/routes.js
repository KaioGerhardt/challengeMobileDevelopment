const express = require('express');
const router = express.Router();
const Users = require('./services/Users');
const TokenManager = require('./services/TokenManager');
const CalendarService = require('./services/CalendarService');

router.post('/login', async (req, res) => {
    try{
        let requestData = req.body;
        if(requestData.email != undefined &&  requestData.password != undefined){
            let user = new Users(requestData.email, requestData.password);
            let result = await user.loginValidate();

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

router.post('/calendarEvents', async (req, res) => {
    try{
        let requestData = req.body;
        let calendar = new CalendarService();

        let result = await calendar.getEvents(requestData.month, requestData.year);

        if(result){
            res.status(200).json({response: true, data: result});
        }else{
            res.status(500).json({response: false});
        }
        
    }catch(error){
        console.error("Error: ", error);
        res.status(500).json(error);
    }
});

router.post('/newEvent', async (req, res) => {
    try{
        let requestData = req.body;
        let calendar = new CalendarService();

        let result = await calendar.newEvent(requestData);

        if(result){
            res.status(200).json({response: true});
        }else{
            res.status(500).json({response: false});
        }
        
    }catch(error){
        console.error("Error: ", error);
        res.status(500).json(error);
    }
});

router.post('/newUser', async (req, res) => {
    try{
        let requestData = req.body;
        let user = new Users(requestData.email, requestData.password);
        let result = await user.createUser(requestData.name);

        if(result){
            res.status(200).json({created: true});
        }else{
            res.status(200).json({created: false});
        }


    }catch(error){
        console.error("Error: ", error);
        res.status(500).json(error);
    }
})

module.exports = router;