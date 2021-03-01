import {MessageReaction} from "discord.js";
import {PingFinder} from "../commands/ping-finder";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types";
import {DateFormat} from "../utils/date";

@injectable()
export class ReactRoll {
    private pingFinder: PingFinder;
    private dateFormat: DateFormat;

    constructor(
        @inject(TYPES.PingFinder) pingFinder: PingFinder,
        @inject(TYPES.DateFormat) dateFormat: DateFormat,
    ) {
        this.pingFinder = pingFinder;
        this.dateFormat = dateFormat;
    }

    handle(reaction: MessageReaction): Promise<MessageReaction | MessageReaction[]> {
        const users = reaction.users.cache.last();
        if (reaction.emoji.name === "✅") {
            if (users.bot) return;
            reaction.message.channel.send(`${users} ${this.dateFormat.dateFR()}`);
        }
        return Promise.reject();
    }
}
