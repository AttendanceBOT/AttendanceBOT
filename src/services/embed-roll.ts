import { Message } from "discord.js";
import { AppelTrigger } from "../commands/appel-trigger";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { DateFormat } from "../utils/date";
import { FileRoll } from "../services/file-roll";

@injectable()
export class EmbedRoll {
    private appelTrigger: AppelTrigger;
    private dateFormat: DateFormat;
    private studentsAfterRoll = [];
    private fileRoll: FileRoll;

    constructor(
        @inject(TYPES.AppelTrigger) appelTrigger: AppelTrigger,
        @inject(TYPES.DateFormat) dateFR: DateFormat,
        @inject(TYPES.FileRoll) fileRoll: FileRoll
    ) {
        this.appelTrigger = appelTrigger;
        this.dateFormat = dateFR;
        this.fileRoll = fileRoll;
    }

    handle(message: Message): Promise<Message | Message[]> {
        const filter = reaction => reaction.emoji.name === '✅';
        if (this.appelTrigger.isTrigger(message.content) && message.member.roles?.cache.find(r => r.name === "Professeur")) {
            let userTestStatus = new Array();

            for (var i = 0; i < this.appelTrigger.getRolePermission().length; i++) {
                userTestStatus.push({
                    id: this.appelTrigger.getRolePermission()[i],
                    allow: ['ADD_REACTIONS', 'VIEW_CHANNEL']
                });
            }

            userTestStatus.push({ id: "787995922830983169", deny: ['VIEW_CHANNEL'] });

            message.guild.channels.create('appel ' + this.appelTrigger.getRolePermission(), {
                type: 'text',
                permissionOverwrites: [...userTestStatus]
            }).then((channelCreate) => {
                channelCreate.send({
                    embed: {
                        color: 3447003,
                        description: "Veuillez cliquer sur l'émoji :white_check_mark: ci-dessous afin de valider votre présence en cours"
                    }
                }).then(
                    async sentMessage => {
                        await sentMessage.react("✅").then(() => {
                            sentMessage.awaitReactions(filter, { time: 120000 })
                                .then(collected => collected
                                    .map(userReactions => this.studentsAfterRoll = userReactions.users.cache.map(name => message.guild.members.cache.get(name.id).nickname))
                                ).then(() => {
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
        }, 130000);

        return Promise.reject();
    }

    public getStudentsAfterRoll() {
        return this.studentsAfterRoll;
    }
}