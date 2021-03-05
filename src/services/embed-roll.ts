import {Collection, Message} from "discord.js";
import {PingFinder} from "../commands/ping-finder";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types";
import {DateFormat} from "../utils/date";

@injectable()
export class EmbedRoll {
    private pingFinder: PingFinder;
    private dateFormat: DateFormat;

    constructor(
        @inject(TYPES.PingFinder) pingFinder: PingFinder,
        @inject(TYPES.DateFormat) dateFR: DateFormat,
    ) {
        this.pingFinder = pingFinder;
        this.dateFormat = dateFR;
    }

    handle(message: Message): Promise<Message | Message[]> {
        const filter = reaction => reaction.emoji.name === '✅';
        if (this.pingFinder.isTriggerCommand(message.content) && message.member.roles?.cache.find(r => r.name === "Professeur")) {
            let userTestStatus = new Array();

            for (var i = 0; i < this.pingFinder.getRolePermission().length; i++) {
                userTestStatus.push({
                    id: this.pingFinder.getRolePermission()[i],
                    allow: ['ADD_REACTIONS', 'VIEW_CHANNEL']
                });
            }

            userTestStatus.push({id: "787995922830983169", deny: ['VIEW_CHANNEL']});

            message.guild.channels.create('appel ' + this.pingFinder.getRolePermission(), {
                type: 'text',
                permissionOverwrites: [...userTestStatus]

            }).then((channelCreate) => {
                    channelCreate.send({
                        embed: {
                            color: 3447003,
                            description: "Veuillez cliquer sur l'émoji"
                        }
                    }).then(
                        async sentMessage => {
                            await sentMessage.react("✅").then(() => {
                                sentMessage.awaitReactions(filter, {time: 5000})
                                    .then(collected =>
                                        message.author.send(collected
                                            .map(userReactions => userReactions.users.cache.map(n => n.username))))
                            })
                        })
                }
            );
        }

        return Promise.reject();
    }
}
