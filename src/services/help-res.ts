import { Message } from "discord.js";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { HelpTrigger } from "../commands/help-trigger";

@injectable()
export class HelpRes {
  private helpTrigger: HelpTrigger;

  constructor(
    @inject(TYPES.HelpTrigger) helpTrigger: HelpTrigger
  ) {
    this.helpTrigger = helpTrigger;
  }

  handle(message: Message): Promise<Message | Message[]> {
    if (this.helpTrigger.isTrigger(message.content)) {
      return message.channel.send({embed: {
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
      }})
    };
    return Promise.reject();
  }
}
