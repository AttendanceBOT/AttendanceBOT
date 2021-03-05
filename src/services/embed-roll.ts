import {Message} from "discord.js";
import {PingFinder} from "../commands/ping-finder";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types";
import {DateFormat} from "../utils/date";

@injectable()
export class EmbedRoll {
    private pingFinder: PingFinder;
    private dateFormat: DateFormat;
    private nomRoleDedie: string;

    constructor(
        @inject(TYPES.PingFinder) pingFinder: PingFinder,
        @inject(TYPES.DateFormat) dateFR: DateFormat,
    ) {
        this.pingFinder = pingFinder;
        this.dateFormat = dateFR;
    }
  
    handle(message: Message): Promise<Message | Message[]> {
        let studentsRoll = [];
        let nomRoleDedie = this.pingFinder.getRolePermission(); 
        const filter = reaction => reaction.emoji.name === '✅' && message.member.roles.cache.has(nomRoleDedie);
        if (this.pingFinder.isTriggerCommand(message.content) && message.member.roles?.cache.find(r => r.name === "Professeur")) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    description: "Veuillez cliquer sur l'émoji"
                }
            }).then(
                async sentMessage => {
                    await sentMessage.react("✅")
                        .then(() => {                            
                            sentMessage.awaitReactions(filter, {time: 5000})
                                .then(collected => message.channel
                                    .send(`${collected
                                        .map(usersReaction => studentsRoll = usersReaction.users.cache.array().slice(1))}`));
                            message.channel.send(studentsRoll);
                        })
                }
            );
        }

        return Promise.reject();
    }
}
