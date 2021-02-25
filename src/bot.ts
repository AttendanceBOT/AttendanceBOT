import {Client, Guild, Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {MessageResponder} from "./services/message-responder";
import {ReactRoll} from "./services/react-roll";

@injectable()
export class Bot {
    private client: Client;
    private readonly token: string;
    private messageResponder: MessageResponder;
    private reactRoll: ReactRoll;

    constructor(
        @inject(TYPES.Client) client: Client,
        @inject(TYPES.Token) token: string,
        @inject(TYPES.MessageResponder) messageResponder: MessageResponder,
        @inject(TYPES.ReactRoll) reactRoll: ReactRoll) {
        this.client = client;
        this.token = token;
        this.messageResponder = messageResponder;
        this.reactRoll = reactRoll;
    }

    public listen(): Promise<string> {
        this.client.on('message', (message: Message) => {
            if (message.author.bot) {
                console.log('Ignoring bot message!')
                return;
            }

            console.log("Message received! Contents: ", message.content);

            this.messageResponder.handle(message).then(() => {
                console.log("Response sent!");
            }).catch(() => {
                console.log("Response not sent.")
            })
        });

        this.client.on('messageReactionAdd', (reaction) => {
            this.reactRoll.handle(reaction).then(() => {
                console.log("React not sent");
            }).catch(() => {
                console.log("React sent.")
            })
        });

        return this.client.login(this.token);
    }
}
