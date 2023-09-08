export class CalendarEvents{
    date: Date;
    title: String;
    description: String;
    isActive: number;

    constructor(){
        this.date = new Date();
        this.title = "";
        this.description = "";
        this.isActive = 1;
    }
}