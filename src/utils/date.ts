import {injectable} from "inversify";

@injectable()
export class DateFormat {

    private dateOfToday = new Date();

    public dateFR() {
        return this.dateOfToday.getDate() + '/' + ((this.dateOfToday.getMonth() + 1)) +
            '/' + this.dateOfToday.getFullYear() + ' ' + this.dateOfToday.getHours() +
            ':' + this.dateOfToday.getMinutes() + ':' + this.dateOfToday.getSeconds();
        ;
    }
}

