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
exports.PingFinder = void 0;
const inversify_1 = require("inversify");
const types_1 = require("../../types");
let PingFinder = class PingFinder {
    constructor(prefix) {
        this.regexp = 'app';
        this.idRole = [];
        this.prefix = prefix;
    }
    isTriggerCommand(stringToSearch) {
        return stringToSearch.search(this.regexp) >= 0;
    }
    handle(message) {
        if (!message.content.startsWith(this.prefix) || message.author.bot)
            return;
        const args = message.content.slice(this.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        this.idRole = [];
        for (var i = 0; i < args.length; i++) {
            this.idRole.push(args[i].substring(3).slice(0, -1));
        }
        message.channel.send(this.getRolePermission());
        return Promise.reject();
    }
    getRolePermission() {
        return this.idRole;
    }
};
PingFinder = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.Prefix)),
    __metadata("design:paramtypes", [String])
], PingFinder);
exports.PingFinder = PingFinder;
//# sourceMappingURL=ping-finder.js.map