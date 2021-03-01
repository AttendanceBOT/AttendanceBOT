import {injectable} from "inversify";
import {format} from 'date-fns'
import {fr} from 'date-fns/locale'

@injectable()
export class DateFormat {

    public dateFR() {
        return format(new Date(), 'dd/MM/yyyy HH:mm:ss', {locale: fr});
    }

}
