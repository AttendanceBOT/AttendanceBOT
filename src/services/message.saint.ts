import { Message, Client } from "discord.js";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { DateFormat } from "../utils/date";

const axios = require('axios');


@injectable()
export class SaintMessage {
    private dateFormat: DateFormat;
    private readonly key: string;
    private client: Client;


    constructor(@inject(TYPES.DateFormat) dateFormat: DateFormat,
        @inject(TYPES.Key) key: string, @inject(TYPES.Client) client: Client) {
        this.dateFormat = dateFormat;
        this.key = key;
        this.client = client;
    }

    handleMessage(message: Message): Promise<Message | Message[]> {
        if (message.content === "!saint") {
            axios.get(`http://fetedujour.fr/api/v2/${this.key}/json-normal-${this.dateFormat.dayAPI()}-${this.dateFormat.monthAPI()}`)
                .then((res) => {
                    message.channel.send(`Nous sommes le ${this.dateFormat.dateFR()}, bonne fête aux ${res.data.name}`)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        return Promise.reject();
    }
}
