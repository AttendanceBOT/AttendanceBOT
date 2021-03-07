"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRoll = void 0;
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const date_1 = require("../utils/date");
var fs = require('fs');
var stringify = require('csv-stringify');
let FileRoll = class FileRoll {
    constructor(dateFormat) {
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
            if (err)
                throw err;
            fs.writeFile('Feuille/appel.csv', output, (err) => {
                if (err)
                    throw err;
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
        };
        return message;
    }
};
FileRoll = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.DateFormat)),
    __metadata("design:paramtypes", [date_1.DateFormat])
], FileRoll);
exports.FileRoll = FileRoll;
//# sourceMappingURL=file-roll.js.map