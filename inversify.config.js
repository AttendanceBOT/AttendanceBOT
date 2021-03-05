"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const types_1 = require("./types");
const bot_1 = require("./src/bot");
const discord_js_1 = require("discord.js");
const ping_finder_1 = require("./src/commands/ping-finder");
const embed_roll_1 = require("./src/services/embed-roll");
const date_1 = require("./src/utils/date");
let container = new inversify_1.Container();
container.bind(types_1.TYPES.Bot).to(bot_1.Bot).inSingletonScope();
container.bind(types_1.TYPES.Client).toConstantValue(new discord_js_1.Client());
container.bind(types_1.TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind(types_1.TYPES.EmbedRoll).to(embed_roll_1.EmbedRoll).inSingletonScope();
container.bind(types_1.TYPES.PingFinder).to(ping_finder_1.PingFinder).inSingletonScope();
container.bind(types_1.TYPES.DateFormat).to(date_1.DateFormat).inSingletonScope();
exports.default = container;
//# sourceMappingURL=inversify.config.js.map