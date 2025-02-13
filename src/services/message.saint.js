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
exports.SaintMessage = void 0;
const discord_js_1 = require("discord.js");
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const date_1 = require("../utils/date");
const saint_trigger_1 = require("../commands/saint-trigger");
const axios = require('axios');
let SaintMessage = class SaintMessage {
    constructor(dateFormat, key, client, saintTrigger) {
        this.dateFormat = dateFormat;
        this.key = key;
        this.client = client;
        this.saintTrigger = saintTrigger;
    }
    handleMessage(message) {
        if (this.saintTrigger.isTrigger(message.content)) {
            axios.get(`http://fetedujour.fr/api/v2/${this.key}/json-normal-${this.dateFormat.dayAPI()}-${this.dateFormat.monthAPI()}`)
                .then((res) => {
                message.channel.send(`Nous sommes le ${this.dateFormat.dateFR()}, bonne fête aux **${res.data.name}** !`);
            })
                .catch((err) => {
                console.log(err);
            });
        }
        return Promise.reject();
    }
};
SaintMessage = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.DateFormat)),
    __param(1, inversify_1.inject(types_1.TYPES.Key)),
    __param(2, inversify_1.inject(types_1.TYPES.Client)),
    __param(3, inversify_1.inject(types_1.TYPES.SaintTrigger)),
    __metadata("design:paramtypes", [date_1.DateFormat, String, discord_js_1.Client,
        saint_trigger_1.SaintTrigger])
], SaintMessage);
exports.SaintMessage = SaintMessage;
//# sourceMappingURL=message.saint.js.map