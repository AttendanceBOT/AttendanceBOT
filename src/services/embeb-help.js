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
exports.EmbedHelp = void 0;
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const date_1 = require("../utils/date");
let EmbedHelp = class EmbedHelp {
    constructor(dateFormat) {
        this.dateFormat = dateFormat;
    }
    handle(message) {
        var _a;
        if (message.content === '!help' && ((_a = message.member.roles) === null || _a === void 0 ? void 0 : _a.cache.find(r => r.name === "Professeur"))) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Toutes les commandes de votre AttendanceBOT",
                    fields: [{
                            name: "Fields",
                            value: "They can have different fields with small headlines."
                        },
                        {
                            name: "Masked links",
                            value: "You can put [masked links](http://google.com) inside of rich embeds."
                        },
                        {
                            name: "Markdown",
                            value: "You can put all the *usual* **__Markdown__** inside of them."
                        }
                    ],
                    footer: {
                        text: "© Example"
                    }
                }
            });
        }
        return Promise.reject();
    }
};
EmbedHelp = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.DateFormat)),
    __metadata("design:paramtypes", [date_1.DateFormat])
], EmbedHelp);
exports.EmbedHelp = EmbedHelp;
//# sourceMappingURL=embeb-help.js.map