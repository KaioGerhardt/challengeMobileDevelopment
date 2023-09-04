export class CalendarEvents{
    date: Date;
    title: String;
    isActive: number;

    constructor(){
        this.date = new Date();
        this.title = "";
        this.isActive = 1;
    }
}