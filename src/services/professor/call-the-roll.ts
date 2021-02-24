import {Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "../../../types";
import {EmbedRoll} from "./embed-roll";
import {PingFinder} from "../ping-finder";

@injectable()
export class CallTheRoll {
    private embedRoll: EmbedRoll;
    private pingFinder: PingFinder;

    constructor(
        @inject(TYPES.EmbedRoll) embedRoll: EmbedRoll,
        @inject(TYPES.PingFinder) pingFinder: PingFinder
    ) {
        this.embedRoll = embedRoll;
    }

    handle(message: Message): Promise<Message | Message[]> {
        if (this.pingFinder.isPing(message.content)) {
            return message.reply("test injection")
        }

        return Promise.reject();
    }
}
