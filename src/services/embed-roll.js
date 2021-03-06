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
const appel_trigger_1 = require("../commands/appel-trigger");
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const date_1 = require("../utils/date");
const file_roll_1 = require("../services/file-roll");
let EmbedRoll = class EmbedRoll {
    constructor(appelTrigger, dateFR, fileRoll) {
        this.studentsAfterRoll = [];
        this.appelTrigger = appelTrigger;
        this.dateFormat = dateFR;
        this.fileRoll = fileRoll;
    }
    handle(message) {
        var _a;
        const filter = reaction => reaction.emoji.name === '✅';
        if (this.appelTrigger.isTrigger(message.content) && ((_a = message.member.roles) === null || _a === void 0 ? void 0 : _a.cache.find(r => r.name === "Professeur"))) {
            let userTestStatus = new Array();
            for (var i = 0; i < this.appelTrigger.getRolePermission().length; i++) {
                userTestStatus.push({
                    id: this.appelTrigger.getRolePermission()[i],
                    allow: ['ADD_REACTIONS', 'VIEW_CHANNEL']
                });
            }
            userTestStatus.push({ id: "787995922830983169", deny: ['VIEW_CHANNEL'] });
            message.guild.channels.create('appel ' + this.appelTrigger.getRolePermission(), {
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
                        sentMessage.awaitReactions(filter, { time: 120000 })
                            .then(collected => collected
                            .map(userReactions => this.studentsAfterRoll = userReactions.users.cache.map(name => message.guild.members.cache.get(name.id).nickname))).then(() => {
                            message.author.send(this.fileRoll.handle(this.studentsAfterRoll));
                        });
                    });
                }));
            });
        }
        setTimeout(() => {
            const channel = message.guild.channels.cache
                .find((channel) => channel.name.startsWith("appel"));
            if (channel) {
                channel.delete();
            }
            return;
        }, 130000);
        return Promise.reject();
    }
    getStudentsAfterRoll() {
        return this.studentsAfterRoll;
    }
};
EmbedRoll = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.AppelTrigger)),
    __param(1, inversify_1.inject(types_1.TYPES.DateFormat)),
    __param(2, inversify_1.inject(types_1.TYPES.FileRoll)),
    __metadata("design:paramtypes", [appel_trigger_1.AppelTrigger,
        date_1.DateFormat,
        file_roll_1.FileRoll])
], EmbedRoll);
exports.EmbedRoll = EmbedRoll;
//# sourceMappingURL=embed-roll.js.map