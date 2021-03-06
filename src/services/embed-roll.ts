import { Collection, Message } from "discord.js";
import { PingFinder } from "../commands/ping-finder";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { DateFormat } from "../utils/date";
import { FileRoll } from "../services/file-roll";

@injectable()
export class EmbedRoll {
    private pingFinder: PingFinder;
    private dateFormat: DateFormat;
    private studentsAfterRoll = [];
    private fileRoll: FileRoll;

    constructor(
        @inject(TYPES.PingFinder) pingFinder: PingFinder,
        @inject(TYPES.DateFormat) dateFR: DateFormat,
        @inject(TYPES.FileRoll) fileRoll: FileRoll
    ) {
        this.pingFinder = pingFinder;
        this.dateFormat = dateFR;
        this.fileRoll = fileRoll;
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

            userTestStatus.push({ id: "787995922830983169", deny: ['VIEW_CHANNEL'] });

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
                            sentMessage.awaitReactions(filter, { time: 5000 })
                                .then(collected => collected
                                    .map(userReactions => this.studentsAfterRoll = userReactions.users.cache.map(name => message.guild.members.cache.get(name.id).nickname))
                                ).then(() => {
                                    message.channel.send(this.studentsAfterRoll);
                                    message.author.send(this.fileRoll.handle(this.studentsAfterRoll));
                                })
                        })
                    })
            }
            );
        }
        setTimeout(() => {
            const channel = message.guild.channels.cache
                .find((channel) => channel.name.startsWith("appel"));
            if (channel) {
                channel.delete();
            }
            return;
        }, 10000);



        return Promise.reject();
    }

    public getStudentsAfterRoll() {
        return this.studentsAfterRoll;
    }
}
