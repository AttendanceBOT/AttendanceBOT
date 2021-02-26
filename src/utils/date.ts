import {injectable} from "inversify";

@injectable()
export class DateFormat {

    private dateOfToday = new Date();

    public dateFR() {
        return ('0'+this.dateOfToday.getDate()).slice(-2) + '/' + ('0'+(this.dateOfToday.getMonth() + 1)).slice(-2) +
            '/' + this.dateOfToday.getFullYear() + ' ' + this.dateOfToday.getHours() +
            ':' + this.dateOfToday.getMinutes() + ':' + this.dateOfToday.getSeconds();
        ;
    }
}

