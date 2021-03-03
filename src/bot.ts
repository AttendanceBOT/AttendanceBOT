import {Client, Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {EmbedRoll} from "./services/embed-roll";
import {ReactRoll} from "./services/react-roll";

@injectable()
export class Bot {
    private client: Client;
    private readonly token: string;
    private embedRoll: EmbedRoll;
    private reactRoll: ReactRoll;

    constructor(
        @inject(TYPES.Client) client: Client,
        @inject(TYPES.Token) token: string,
        @inject(TYPES.EmbedRoll) embedRoll: EmbedRoll,
        @inject(TYPES.ReactRoll) reactRoll: ReactRoll){
        this.client = client;
        this.token = token;
        this.embedRoll = embedRoll;
        this.reactRoll = reactRoll;
    }

    public listen(): Promise<string> {
        this.client.on('message', (message: Message) => {
            if (message.author.bot) {
                console.log('Ignoring bot message!')
                return;
            }

            console.log("Message received! Contents: ", message.content);

            this.embedRoll.handle(message).then(() => {
                console.log("Response sent!");
            }).catch(() => {
                console.log("Response not sent.")
            })
        });

        return this.client.login(this.token);
    }
}
