import { Client, Message } from "discord.js";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { BotPresence } from "./services/bot-presence";
import { EmbedRoll } from "./services/embed-roll";
import { CronSaintMessage } from "./services/cron-message-saint";
import { SaintMessage } from "./services/message.saint";
import { AppelTrigger } from "./commands/appel-trigger";
import { HelpRes } from "./services/help-res";

@injectable()
export class Bot {
    private client: Client;
    private readonly token: string;
    private botPresence: BotPresence;
    private embedRoll: EmbedRoll;
    private cronSaintMessage: CronSaintMessage;
    private saintMessage: SaintMessage;
    private appelTrigger: AppelTrigger;
    private helpRes: HelpRes;

    constructor(
        @inject(TYPES.Client) client: Client,
        @inject(TYPES.Token) token: string,
        @inject(TYPES.ActivityGame) botPresence: BotPresence,
        @inject(TYPES.EmbedRoll) embedRoll: EmbedRoll,
        @inject(TYPES.CronSaintMessage) cronSaintMessage: CronSaintMessage,
        @inject(TYPES.SaintMessage) saintMessage: SaintMessage,
        @inject(TYPES.AppelTrigger) appelTrigger: AppelTrigger,
        @inject(TYPES.HelpRes) helpRes: HelpRes,
    ) {
        this.client = client;
        this.token = token;
        this.embedRoll = embedRoll;
        this.botPresence = botPresence;
        this.cronSaintMessage = cronSaintMessage;
        this.saintMessage = saintMessage;
        this.appelTrigger = appelTrigger;
        this.helpRes = helpRes;
    }

    public listen(): Promise<string> {
        this.client.on('message', (message: Message) => {
            if (message.author.bot) {
                console.log('Ignoring bot message!')
                return;
            }

            console.log("Message received! Contents: ", message.content);

            this.appelTrigger.handle(message).then(() => {
                console.log("Response sent!");
            }).catch(() => {
                console.log("Response not sent.")
            })

            this.embedRoll.handle(message).then(() => {
                console.log("Response sent!");
            }).catch(() => {
                console.log("Response not sent.")
            })

            this.helpRes.handle(message).then(() => {
                console.log("Response sent!");
            }).catch(() => {
                console.log("Response not sent.")
            })

            this.saintMessage.handleMessage(message).then(() => {
                console.log("Message not sent");
            }).catch(() => {
                console.log("Message sent.")
            })
        });

        this.client.on('ready', () => {
            this.botPresence.handle().then(() => {
                console.log("Response sent!");
            }).catch(() => {
                console.log("Response not sent.")
            })

            this.cronSaintMessage.handle().then(() => {
                console.log("Message not sent");
            }).catch(() => {
                console.log("Message sent automaticaly.")
            })
        });

        return this.client.login(this.token);
    }
}
