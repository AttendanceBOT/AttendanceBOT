import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { Client } from "discord.js";

@injectable()
export class BotPresence {
  private client: Client;

  constructor(
    @inject(TYPES.Client) client: Client,
  ) {
    this.client = client;
  }

  handle(): Promise<void | void[]> {
    this.client.user.setPresence({
      activity: {
        name: '!help',
        type: 'WATCHING'
      },
      status: 'online'
    })
    return Promise.reject();
  }
}