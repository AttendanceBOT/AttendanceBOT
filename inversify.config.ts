import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {Bot} from "./src/bot";
import {Client} from "discord.js";
import {PingFinder} from "./src/services/ping-finder";
import {MessageResponder} from "./src/services/message-responder";
import {ReactRoll} from "./src/services/react-roll";


let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);

container.bind<MessageResponder>(TYPES.MessageResponder).to(MessageResponder).inSingletonScope();
container.bind<PingFinder>(TYPES.PingFinder).to(PingFinder).inSingletonScope();
container.bind<ReactRoll>(TYPES.ReactRoll).to(ReactRoll).inSingletonScope();

export default container;
