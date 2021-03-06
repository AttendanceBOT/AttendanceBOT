import { Message, MessageAttachment } from "discord.js";
import { FileFinder } from "./file-finder";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { DateFormat } from "../utils/date";

var fs = require('fs');
var stringify = require('csv-stringify');

@injectable()
export class FileRoll {
    private fileFinder: FileFinder;
    private dateFormat: DateFormat;
    private message: Message;

    constructor(
        @inject(TYPES.FileFinder) fileFinder: FileFinder,
        @inject(TYPES.DateFormat) dateFormat: DateFormat
    ) {
        this.fileFinder = fileFinder;
        this.dateFormat = dateFormat;
    }

    handle(students = []) {
        const urlImage = "https://media.discordapp.net/attachments/808337247866847252/814952658657345596/Microsoft-Excel-Logo.png";

        let data = [];

        let columns = {
            id: 'Id',
            Name: 'Nom',
            State: 'Présence en cours visio',
            Date: 'Date'
        };

        for (var i = 1; i < students.length; i++) {
            //data.push([i, this.embedRoll.getStudentsAfterRoll()[i]]);
            data.push([i, students[i], "OK", this.dateFormat.dateCSV()]);
        }

        stringify(data, { header: true, columns: columns }, (err, output) => {
            if (err) throw err;
            fs.writeFile('Feuille/my.csv', output, (err) => {
                if (err) throw err;
                console.log('my.csv saved.');
            });
        });

        const message = {
            embed: {
                color: 15158332,
                title: "Voici le lien de la feuille d'appel",
                image: {
                    url: urlImage,
                }
            },
            files: [{
                attachment: "Feuille/my.csv",
                name: 'my.csv'
            }]
        }

        return message;
    }
}
