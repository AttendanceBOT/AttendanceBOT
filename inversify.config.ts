import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { Bot } from "./src/bot";
import { Client } from "discord.js";
import { AppelTrigger } from "./src/commands/appel-trigger";
import { EmbedRoll } from "./src/services/embed-roll";
import { DateFormat } from "./src/utils/date";
import { CronSaintMessage } from "./src/services/cron-message-saint";
import { SaintMessage } from "./src/services/message.saint";
import { BotPresence } from "./src/services/bot-presence";
import { HelpTrigger } from "./src/commands/help-trigger";
import { HelpRes } from "./src/services/help-res";
import {FileRoll} from "./src/services/file-roll";
import {SaintTrigger} from "./src/commands/saint-trigger";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<string>(TYPES.Key).toConstantValue(process.env.KEY);
container.bind<string>(TYPES.Prefix).toConstantValue(process.env.PREFIX);

container.bind<AppelTrigger>(TYPES.AppelTrigger).to(AppelTrigger).inSingletonScope();
container.bind<HelpTrigger>(TYPES.HelpTrigger).to(HelpTrigger).inSingletonScope();
container.bind<SaintTrigger>(TYPES.SaintTrigger).to(SaintTrigger).inSingletonScope();

container.bind<EmbedRoll>(TYPES.EmbedRoll).to(EmbedRoll).inSingletonScope();
container.bind<DateFormat>(TYPES.DateFormat).to(DateFormat).inSingletonScope();
container.bind<SaintMessage>(TYPES.SaintMessage).to(SaintMessage).inSingletonScope();
container.bind<HelpRes>(TYPES.HelpRes).to(HelpRes).inSingletonScope();
container.bind<FileRoll>(TYPES.FileRoll).to(FileRoll).inSingletonScope();

container.bind<CronSaintMessage>(TYPES.CronSaintMessage).to(CronSaintMessage).inSingletonScope();
container.bind<BotPresence>(TYPES.ActivityGame).to(BotPresence).inSingletonScope();

export default container;
