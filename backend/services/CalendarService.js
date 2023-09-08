const Database = require('../db');
const { param } = require('../routes');

class Calendar{
    constructor(){
        this.DatabaseConnection = new Database();
    }

    getEvents(){
        try{
            this.DatabaseConnection.query(`SELECT `);

        }catch(error){
            console.error("ERROR: ", error)
        }finally{
            this.DatabaseConnection.close();
        }
    }

    newEvent(parameters){
        let response = null;
        try{
            console.log('PARAMETERS -> ', parameters);
            this.DatabaseConnection.query(`INSERT INTO events(title, date, description) VALUES ('${parameters.title}', '${parameters.date}', '${parameters.description}')`)
            
            response =  true;
        }catch(error){
            response =  false;
            console.error("ERROR: ", error)
        }finally{
            this.DatabaseConnection.close();
        }

        return response;
    }
}

module.exports = Calendar;