import {injectable} from "inversify";
import {Message, Role} from "discord.js";

@injectable()
export class PingFinder {

    private regexp = '!appel';
    private nomRoleGrp : string;
    private  getRole: Role;

    public isTriggerCommand(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }

    handle(message) {
        if (!message.content.startsWith(this.regexp))
            return;
        let allRole = [];
        let tabelement = [];
        const args = (message.content.slice(this.regexp.length).trim().split(' '));
        const elementofargs = args.map(a =>tabelement.push(a.substring(3,21)));     
        const command = args.shift().toLowerCase();
        message.guild.roles.cache.map(role => allRole.push(role.id));
        var el = args.find(a =>a.substring(3,21));

        for (var i = 0; i < allRole.length; i++) {
            for (var j=0; j< tabelement.length; j++){                
                if(tabelement[j] === allRole[i]){
                   // message.channel.send("Vous avez lancé l'appel pour " + tabelement[j]);
                    this.getRole = message.guild.roles.cache.find((role) => role.id === tabelement[j]);
                    message.channel.send("Vous avez lancé l'appel pour les " + this.getRole.name);
                    console.log("JAI REUSSI");
                }
                else{
                    console.log("PRESQUE");
                }
            }
        }
        //console.log("Voici les args " + args + "\n Voici les elements de l'args" + elementofargs + "\n TAB" + tabelement);
             
        return Promise.reject();
    }
    public getRolePermission() :string {
        return this.nomRoleGrp;
    }

    public setRolePermission(nomRole: string):string {
        return this.nomRoleGrp = nomRole;
    }
    
}
