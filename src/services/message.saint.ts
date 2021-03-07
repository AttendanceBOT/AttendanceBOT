import { Message, Client } from "discord.js";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { DateFormat } from "../utils/date";
import { SaintTrigger } from "../commands/saint-trigger";

const axios = require('axios');

@injectable()
export class SaintMessage {
    private dateFormat: DateFormat;
    private readonly key: string;
    private client: Client;
    private saintTrigger: SaintTrigger;

    constructor(
        @inject(TYPES.DateFormat) dateFormat: DateFormat,
        @inject(TYPES.Key) key: string,
        @inject(TYPES.Client) client: Client,
        @inject(TYPES.SaintTrigger) saintTrigger: SaintTrigger
    ) {
        this.dateFormat = dateFormat;
        this.key = key;
        this.client = client;
        this.saintTrigger = saintTrigger
    }

    handleMessage(message: Message): Promise<Message | Message[]> {
        if (this.saintTrigger.isTrigger(message.content)) {
            axios.get(`http://fetedujour.fr/api/v2/${this.key}/json-normal-${this.dateFormat.dayAPI()}-${this.dateFormat.monthAPI()}`)
                .then((res) => {
                    message.channel.send(`Nous sommes le ${this.dateFormat.dateFR()}, bonne fête aux **${res.data.name}** !`)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        return Promise.reject();
    }
}