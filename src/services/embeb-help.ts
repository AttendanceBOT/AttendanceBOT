import {Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types";
import {DateFormat} from "../utils/date";

@injectable()
export class EmbedHelp {
    private dateFormat: DateFormat;

    constructor(@inject(TYPES.DateFormat) dateFormat: DateFormat,
    ) {
        this.dateFormat = dateFormat;
    }

    handle(message: Message): Promise<Message | Message[]> {
        if (message.content === '!help' && message.member.roles?.cache.find(r => r.name === "Professeur")) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Toutes les commandes de votre AttendanceBOT",
                    fields: [{
                        name: "Fields",
                        value: "They can have different fields with small headlines."
                    },
                        {
                            name: "Masked links",
                            value: "You can put [masked links](http://google.com) inside of rich embeds."
                        },
                        {
                            name: "Markdown",
                            value: "You can put all the *usual* **__Markdown__** inside of them."
                        }
                    ],
                    footer: {
                        text: "© Example"
                    }
                }
            })
        }
        return Promise.reject();
    }
}
