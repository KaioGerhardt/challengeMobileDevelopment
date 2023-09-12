export class CalendarEvents{
    date: String;
    title: String;
    description: String;
    isActive: number;

    constructor(){
        this.date = new Date().toISOString();
        this.title = "";
        this.description = "";
        this.isActive = 1;
    }
}