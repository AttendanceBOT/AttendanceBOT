import {MessageReaction} from "discord.js";
import {PingFinder} from "./ping-finder";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types";

@injectable()
export class ReactRoll {
    private pingFinder: PingFinder;

    constructor(
        @inject(TYPES.PingFinder) pingFinder: PingFinder
    ) {
        this.pingFinder = pingFinder;
    }

    handle(reaction: MessageReaction): Promise<MessageReaction | MessageReaction[]> {
        const users = reaction.users.cache.last();
        if (reaction.emoji.name === "✅") {
            if (users.bot) return;
            reaction.message.channel.send(`${users}`);
        }
        return Promise.reject();
    }
}
