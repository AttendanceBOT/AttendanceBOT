import { injectable } from "inversify";
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

@injectable()
export class DateFormat {

    public dateFR() {
        return format(new Date(), 'dd/MM/yyyy HH:mm:ss', { locale: fr });
    }

    public monthAPI() {
        return format(new Date(), 'M')
    }

    public dayAPI() {
        return format(new Date(), 'd')
    }

    public dateCSV() {
        return format(new Date(), 'dd/MM/yyyy HH:mm', { locale: fr });
    }
}
