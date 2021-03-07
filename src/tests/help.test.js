"use strict";
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
require("reflect-metadata");
require("mocha");
const ts_mockito_1 = require("ts-mockito");
const discord_js_1 = require("discord.js");
const help_res_1 = require("../services/help-res");
const help_trigger_1 = require("../commands/help-trigger");
describe('Help resultat', () => {
    let mockedMessageClass;
    let mockedMessageInstance;
    let mockedHelpResClass;
    let mockedHelpResInstance;
    let mockedHelpTriggerClass;
    let mockedHelpTriggerInstance;
    let service;
    beforeEach(() => {
        mockedHelpTriggerClass = ts_mockito_1.mock(help_trigger_1.HelpTrigger);
        mockedHelpTriggerInstance = ts_mockito_1.instance(mockedHelpTriggerClass);
        mockedHelpResClass = ts_mockito_1.mock(help_res_1.HelpRes);
        mockedHelpResInstance = ts_mockito_1.instance(mockedHelpResClass);
        mockedMessageClass = ts_mockito_1.mock(discord_js_1.Message);
        mockedMessageInstance = ts_mockito_1.instance(mockedMessageClass);
        setMessageContents();
        service = new help_res_1.HelpRes(mockedHelpTriggerClass);
    });
    it('should not reply', () => __awaiter(void 0, void 0, void 0, function* () {
        whenIsPingThenReturn(true);
        const embedHelp = {
            embed: {
                color: 3447003,
                title: "**LISTE DES COMMANDES D'ATTENDANCEBOT**",
                description: "AttendanceBot est un bot vous permettant de réaliser l'appel à votre place. Voici la liste des fonctions avec un exemple associé pour utiliser AttendanceBot.\n",
                fields: [{
                        name: "Commande 1 - Lancer un appel : !appel",
                        value: "• __Commande :__ **!appel** @Groupe xxx (nom du rôle du groupe : jusqu'à 4 groupes possibles). \n\n • __Description :__ seuls les personnes ayant le rôle _@Professeur_ peuvent lancer cette commande. Les personnes ayant le rôle désigné dans l'appel verront un salon _appel-xxxxx_ se créer et devront réagir avec :white_check_mark: pour valider leurs présences. \n\n :warning: Attention, un appel ne dure que 2 minutes. :warning: \n\n Au bout de ces 2 minutes, l'appel est terminé. La feuille de présence est envoyée directement au professeur par message privé au format .CSV. Le salon se supprime 10 secondes après. \n\n • __Exemple :__ ```!appel @Groupe 201```\n\n"
                    },
                    {
                        name: "Commande 2 - Redemander la liste des commandes possibles : !help",
                        value: "• __Commande :__ **!help**.\n\n • __Description :__ le bot renvoie cette liste même. Le nom de la commande est rappelé dans l'activité du bot en haut à droite.\n\n • __Exemple :__ ```!help```\n\n"
                    }
                ],
                footer: {
                    text: "© Equipe AttendanceBot | L3 MIAGE APP PROMO 2020-2021"
                }
            }
        };
        yield service.handle(mockedMessageInstance);
        ts_mockito_1.verify(mockedMessageClass.channel.send(embedHelp)).once();
    }));
    function setMessageContents() {
        mockedMessageInstance.content = "Non-empty string";
    }
    function whenIsPingThenReturn(result) {
        ts_mockito_1.when(mockedHelpTriggerClass.isTrigger("Non-empty string")).thenReturn(result);
    }
});
//# sourceMappingURL=help.test.js.map