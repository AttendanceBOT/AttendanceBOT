import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {Bot} from "./src/bot";
import {Client} from "discord.js";
import {PingFinder} from "./src/commands/ping-finder";
import {EmbedRoll} from "./src/services/embed-roll";
import {ReactRoll} from "./src/services/react-roll";
import {DateFormat} from "./src/utils/date";
import {CronSaintMessage} from "./src/services/cron-message-saint";
import {SaintMessage} from "./src/services/message.saint";
import {BotPresence} from "./src/services/bot-presence";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<string>(TYPES.Key).toConstantValue(process.env.KEY);

container.bind<EmbedRoll>(TYPES.EmbedRoll).to(EmbedRoll).inSingletonScope();
container.bind<PingFinder>(TYPES.PingFinder).to(PingFinder).inSingletonScope();
container.bind<ReactRoll>(TYPES.ReactRoll).to(ReactRoll).inSingletonScope();
container.bind<DateFormat>(TYPES.DateFormat).to(DateFormat).inSingletonScope();
container.bind<CronSaintMessage>(TYPES.CronSaintMessage).to(CronSaintMessage).inSingletonScope();
container.bind<SaintMessage>(TYPES.SaintMessage).to(SaintMessage).inSingletonScope();

container.bind<BotPresence>(TYPES.ActivityGame).to(BotPresence).inSingletonScope();

export default container;
