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
exports.HelpRes = void 0;
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const help_trigger_1 = require("../commands/help-trigger");
let HelpRes = class HelpRes {
    constructor(helpTrigger) {
        this.helpTrigger = helpTrigger;
    }
    handle(message) {
        if (this.helpTrigger.isTrigger(message.content)) {
            return message.channel.send({ embed: {
                    color: 3447003,
                    title: "**LISTE DES COMMANDES D'ATTENDANCEBOT**",
                    description: "AttendanceBot est un bot vous permettant de réaliser l'appel à votre place. Voici la liste des fonctions avec un exemple associé pour utiliser AttendanceBot.\n",
                    fields: [{
                            name: "Lancer un appel - !appel",
                            value: "• __Commande :__ **!appel** @Groupe xxx (nom du rôle du groupe : jusqu'à 4 groupes possibles). \n\n • __Description :__ seuls les personnes ayant le rôle _@Professeur_ peuvent lancer cette commande. Les personnes ayant le rôle désigné dans l'appel verront un channel _appel-xxxxx_ se créer et devront réagir avec :white_check_mark: pour valider leurs présences.\n\n :warning: Attention, un appel ne dure que 2 minutes. :warning: \n\n • __Exemple :__ ```!appel @Groupe 201```\n\n"
                        },
                        {
                            name: "Récupérer la feuille de présence - !feuille",
                            value: "• __Commande :__ **!feuille** @Groupe xxx. \n\n • __Description :__ seuls les personnes ayant le rôle _@Professeur_ peuvent lancer cette commande. La feuille est alors envoyée par message privé au professeur par le bot au format .CSV. Le professeur devra vérifier la liste, la modifier si besoin et l'envoyer au secrétariat par mail. \n\n • __Exemple :__ ```!feuille @Groupe 201```\n\n"
                        },
                        {
                            name: "Redemander la liste des commandes possibles - !help",
                            value: "• __Commande :__ **!help**.\n\n • __Description :__ le bot renvoie cette liste même. Le nom de la commande est rappelé dans l'activité du bot en haut à droite.\n\n"
                        }
                    ],
                    footer: {
                        text: "© Equipe AttendanceBot | L3 MIAGE PROMO 2020-2021"
                    }
                } });
        }
        ;
        return Promise.reject();
    }
};
HelpRes = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.HelpTrigger)),
    __metadata("design:paramtypes", [help_trigger_1.HelpTrigger])
], HelpRes);
exports.HelpRes = HelpRes;
//# sourceMappingURL=help-res.js.map