import {inject, injectable} from "inversify";
import {Message} from "discord.js";
import {TYPES} from "../../types";

@injectable()
export class PingFinder {

    private regexp = 'app';
    private nomRoleGrp: string;
    private readonly prefix: string;
    private allRole: string[];
    private idRole: string[] = [];

    constructor(@inject(TYPES.Prefix) prefix: string) {
        this.prefix = prefix;
    }

    public isTriggerCommand(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }

    handle(message: Message): Promise<Message | Message[]> {
        if (!message.content.startsWith(this.prefix) || message.author.bot) return;
        const args = message.content.slice(this.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        let idRole = [];


        for(var i =0;i<args.length;i++){
            this.idRole.push(args[i].substring(3).slice(0,-1));
        }

        message.channel.send(this.getRolePermission())
        return Promise.reject();
    }

    public getRolePermission(): string[] {
        return this.idRole;
    }

    public setRolePermission(nomRole: string): string {
        return this.nomRoleGrp = nomRole;
    }
}
