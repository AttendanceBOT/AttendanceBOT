import { inject, injectable } from "inversify";
import { Message } from "discord.js";
import { TYPES } from "../../types";

@injectable()
export class PingFinder {

    private regexp = 'appel';
    private readonly prefix: string;
    private idRole: string[] = [];

    constructor(@inject(TYPES.Prefix) prefix: string) {
        this.prefix = prefix;
    }

    public isTriggerCommand(stringToSearch: string): boolean {
        const args = stringToSearch.slice(this.prefix.length).trim().split(/ +/);
        return stringToSearch.startsWith(this.prefix) && stringToSearch.search(this.regexp) >= 0 && args.length > 1;
    }

    handle(message: Message): Promise<Message | Message[]> {
        if (this.isTriggerCommand(message.content)) {
            if (message.author.bot) return;
            const args = message.content.slice(this.prefix.length).trim().split(/ +/);

            const command = args.shift().toLowerCase();

            this.idRole = [];

            for (var i = 0; i < args.length; i++) {
                this.idRole.push(args[i].substring(3).slice(0, -1));
            }

            message.channel.send(this.getRolePermission())
        }
        return Promise.reject();
    }

    public getRolePermission(): string[] {
        return this.idRole;
    }
}