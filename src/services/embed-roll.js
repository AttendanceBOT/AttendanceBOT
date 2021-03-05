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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedRoll = void 0;
const discord_js_1 = require("discord.js");
const ping_finder_1 = require("../commands/ping-finder");
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const date_1 = require("../utils/date");
let EmbedRoll = class EmbedRoll {
    constructor(pingFinder, dateFR) {
        this.pingFinder = pingFinder;
        this.dateFormat = dateFR;
    }
    handle(message) {
        var _a;
        let userTestStatus = new Array();
        console.log(this.pingFinder.getRolePermission().length);
        for (var i = 0; i < this.pingFinder.getRolePermission().length; i++) {
            userTestStatus.push({ id: this.pingFinder.getRolePermission()[i], allow: ['ADD_REACTIONS', 'VIEW_CHANNEL'] });
        }
        userTestStatus.push({ id: "787995922830983169", deny: ['VIEW_CHANNEL'] });
        let studentsRoll = new discord_js_1.Collection();
        const filter = reaction => reaction.emoji.name === '✅';
        if (this.pingFinder.isTriggerCommand(message.content) && ((_a = message.member.roles) === null || _a === void 0 ? void 0 : _a.cache.find(r => r.name === "Professeur"))) {
            message.guild.channels.create('appel ' + this.pingFinder.getRolePermission(), {
                type: 'text',
                permissionOverwrites: [...userTestStatus]
            }).then((channelCreate) => {
                channelCreate.send({
                    embed: {
                        color: 3447003,
                        description: "Veuillez cliquer sur l'émoji"
                    }
                }).then((sentMessage) => __awaiter(this, void 0, void 0, function* () {
                    yield sentMessage.react("✅").then(() => {
                        sentMessage.awaitReactions(filter, { time: 5000 })
                            .then(collected => message.author.send(collected
                            .map(userReactions => userReactions.users.cache.map(n => n.username))));
                    });
                }));
            });
        }
        return Promise.reject();
    }
};
EmbedRoll = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.PingFinder)),
    __param(1, inversify_1.inject(types_1.TYPES.DateFormat)),
    __metadata("design:paramtypes", [ping_finder_1.PingFinder,
        date_1.DateFormat])
], EmbedRoll);
exports.EmbedRoll = EmbedRoll;
//# sourceMappingURL=embed-roll.js.map