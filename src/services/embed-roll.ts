import {Message} from "discord.js";
import {PingFinder} from "./ping-finder";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types";

@injectable()
export class EmbedRoll {
    private pingFinder: PingFinder;

    constructor(
        @inject(TYPES.PingFinder) pingFinder: PingFinder
    ) {
        this.pingFinder = pingFinder;
    }

    handle(message: Message): Promise<Message | Message[]> {
        if (this.pingFinder.isTriggerCommand(message.content) && message.member.roles?.cache.find(r => r.name === "Professeur")) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    description: "Veuillez cliquer sur l'émoji"
                }
            }).then(
                async sentMessage => {
                    await sentMessage.react("✅")
                }
            );
        }

        return Promise.reject();
    }
}
