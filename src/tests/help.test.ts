import "reflect-metadata";
import 'mocha';
import {EmbedRoll} from "../services/embed-roll";
import {instance, mock, verify, when} from "ts-mockito";
import {Message} from "discord.js";
import {HelpRes} from "../services/help-res";
import {HelpTrigger} from "../commands/help-trigger";

describe('Help resultat', () => {
    let mockedMessageClass: Message;
    let mockedMessageInstance: Message;
    let mockedHelpResClass: HelpRes;
    let mockedHelpResInstance: HelpRes;
    let mockedHelpTriggerClass: HelpTrigger;
    let mockedHelpTriggerInstance: HelpTrigger;

    let service: HelpRes;

    beforeEach(() => {
        mockedHelpTriggerClass = mock(HelpTrigger);
        mockedHelpTriggerInstance = instance(mockedHelpTriggerClass);
        mockedHelpResClass = mock(HelpRes);
        mockedHelpResInstance = instance(mockedHelpResClass);
        mockedMessageClass = mock(Message);
        mockedMessageInstance = instance(mockedMessageClass);

        setMessageContents();

        service = new HelpRes(mockedHelpTriggerClass);
    })

    it('should not reply', async () => {
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
        }

        await service.handle(mockedMessageInstance);

        verify(mockedMessageClass.channel.send(embedHelp)).once();
    })

    function setMessageContents() {
        mockedMessageInstance.content = "Non-empty string";
    }

    function whenIsPingThenReturn(result: boolean) {
        when(mockedHelpTriggerClass.isTrigger("Non-empty string")).thenReturn(result);
    }
});
