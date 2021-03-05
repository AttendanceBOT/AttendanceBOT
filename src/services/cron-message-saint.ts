import {Message, Client, TextChannel} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "../../types";
import {DateFormat} from "../utils/date";

const axios = require('axios');
var cron = require('node-cron');


@injectable()
export class CronSaintMessage {
    private dateFormat: DateFormat;
    private readonly key: string;
    private client: Client;


    constructor(@inject(TYPES.DateFormat) dateFormat: DateFormat,
                @inject(TYPES.Key) key: string, @inject(TYPES.Client) client: Client) {
        this.dateFormat = dateFormat;
        this.key = key;
        this.client = client;
    }

    handle(): Promise<Message | Message[]> {
        var channel = this.client.channels.cache.get("808337221806719036");

        cron.schedule('0 9 * * *', () => {
            axios.get(`http://fetedujour.fr/api/v2/${this.key}/json-normal`)
                .then((res) => {
                    (channel as TextChannel).send(`Nous sommes le ${this.dateFormat.dateFR()}, bonne fête aux ${res.data.name}`)
                })
                .catch((err) => {
                    console.log(err);
                });
        }, {
            timezone: "Europe/Paris"
        });
        return Promise.reject();
    }
}
