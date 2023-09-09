const Database = require('../db');
const { param } = require('../routes');

class Calendar{
    constructor(){
        this.DatabaseConnection = new Database();
    }

    async getEvents(month, year){
        let response = null;
        try{
            if(month < 10){
                month = '0' + month
            }

            let result = await this.DatabaseConnection.query(`SELECT * FROM events WHERE date >=  '${year}-${month}-01T00:00:00' AND date <= '${year}-${month}-31T23:59:59'`);

            if(result != undefined || result != null){
                response =  result;
            }else{
                response = false;
            }

        }catch(error){
            console.error("ERROR: ", error)
        }finally{
            this.DatabaseConnection.close();
        }

        return response;
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