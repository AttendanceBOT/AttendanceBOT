import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { DateFormat } from "../utils/date";

var fs = require('fs');
var stringify = require('csv-stringify');

@injectable()
export class FileRoll {
    private dateFormat: DateFormat;

    constructor(
        @inject(TYPES.DateFormat) dateFormat: DateFormat
    ) {
        this.dateFormat = dateFormat;
    }

    handle(students = []) {
        const urlImage = "https://media.discordapp.net/attachments/808337247866847252/814952658657345596/Microsoft-Excel-Logo.png";

        let data = [];

        let columns = {
            id: 'Id',
            Name: 'Nom',
            State: 'Présence en cours visio',
            Date: 'Date ' + this.dateFormat.dateCSV()
        };

        for (var i = 1; i < students.length; i++) {
            data.push([i, students[i], "OK", ""]);
        }

        stringify(data, { header: true, columns: columns }, (err, output) => {
            if (err) throw err;
            fs.writeFile('Feuille/appel.csv', output, (err) => {
                if (err) throw err;
                console.log('appel.csv saved.');
            });
        });

        const message = {
            embed: {
                color: 15158332,
                title: "Voici votre feuille d'appel",
                image: {
                    url: urlImage,
                }
            },
            files: [{
                attachment: "Feuille/appel.csv",
                name: 'appel.csv'
            }]
        }

        return message;
    }
}
