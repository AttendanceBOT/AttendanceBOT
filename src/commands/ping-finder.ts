import {injectable} from "inversify";
import {Message} from "discord.js";

@injectable()
export class PingFinder {

    private regexp = '!app';
    private nomRoleGrp: string;

    public isTriggerCommand(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }

    handle(message: Message): Promise<Message | Message[]> {

        if (!message.content.startsWith(this.regexp)) return;
        let allRole = [];
        const args = message.content.slice(this.regexp.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        message.guild.roles.cache.map(role => allRole.push(role.id));

        for (var i = 0; i < allRole.length; i++) {
            if (command.substring(3, 21).toString() === allRole[i]) {
                let getRole = message.guild.roles.cache.find((role) => role.id === command.substring(3, 21).toString());
                message.channel.send("Vous avez lancé l'appel pour les " + getRole.name);
                console.log(this.setRolePermission(command.substring(3, 21).toString()) +"ping finder");
                console.log(this.getRolePermission()+ " get ping finder")
            }
        }
        return Promise.reject();
    }

    public getRolePermission(): string {
        return this.nomRoleGrp;
    }

    public setRolePermission(nomRole: string): string {
        return this.nomRoleGrp = nomRole;
    }

}
