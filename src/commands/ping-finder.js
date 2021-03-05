"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingFinder = void 0;
const inversify_1 = require("inversify");
let PingFinder = class PingFinder {
    constructor() {
        this.regexp = '!app';
    }
    isTriggerCommand(stringToSearch) {
        return stringToSearch.search(this.regexp) >= 0;
    }
    handle(message) {
        if (!message.content.startsWith(this.regexp))
            return;
        let allRole = [];
        const args = message.content.slice(this.regexp.length).trim().split(' ');
        const command = args.shift().toLowerCase();
        message.guild.roles.cache.map(role => allRole.push(role.id));
        for (var i = 0; i < allRole.length; i++) {
            if (command.substring(3, 21).toString() === allRole[i]) {
                let getRole = message.guild.roles.cache.find((role) => role.id === command.substring(3, 21).toString());
                message.channel.send("Vous avez lancé l'appel pour les " + getRole.name);
                console.log(this.setRolePermission(command.substring(3, 21).toString()) + "ping finder");
                console.log(this.getRolePermission() + " get ping finder");
            }
        }
        return Promise.reject();
    }
    getRolePermission() {
        return this.nomRoleGrp;
    }
    setRolePermission(nomRole) {
        return this.nomRoleGrp = nomRole;
    }
};
PingFinder = __decorate([
    inversify_1.injectable()
], PingFinder);
exports.PingFinder = PingFinder;
//# sourceMappingURL=ping-finder.js.map