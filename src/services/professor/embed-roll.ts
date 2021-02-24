import {injectable} from "inversify";

@injectable()
export class EmbedRoll {
    public embedPoll(): string {
        const embed = `
        embed:{
            color: 3447003,
                author: {
                    name: client.user?.username,
                    icon_url: client.user?.avatarURL(),
                }`;

        return embed;
    }
}
