"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("mocha");
const chai_1 = require("chai");
const appel_trigger_1 = require("../commands/appel-trigger");
const embed_roll_1 = require("../services/embed-roll");
const ts_mockito_1 = require("ts-mockito");
const discord_js_1 = require("discord.js");
const date_1 = require("../utils/date");
const file_roll_1 = require("../services/file-roll");
describe('EmbedRoll', () => {
    let mockedPingFinderClass;
    let mockedPingFinderInstance;
    let mockedMessageClass;
    let mockedMessageInstance;
    let mockedDateFNSClass;
    let mockedDateFNSInstance;
    let mockedFileRoleClass;
    let mockedFileRoleInstance;
    let service;
    beforeEach(() => {
        mockedPingFinderClass = ts_mockito_1.mock(appel_trigger_1.AppelTrigger);
        mockedPingFinderInstance = ts_mockito_1.instance(mockedPingFinderClass);
        mockedDateFNSClass = ts_mockito_1.mock(date_1.DateFormat);
        mockedDateFNSInstance = ts_mockito_1.instance(mockedDateFNSClass);
        mockedMessageClass = ts_mockito_1.mock(discord_js_1.Message);
        mockedMessageInstance = ts_mockito_1.instance(mockedMessageClass);
        mockedFileRoleClass = ts_mockito_1.mock(file_roll_1.FileRoll);
        mockedFileRoleInstance = ts_mockito_1.instance(mockedFileRoleClass);
        setMessageContents();
        service = new embed_roll_1.EmbedRoll(mockedPingFinderInstance, mockedDateFNSInstance, mockedFileRoleInstance);
    });
    it('should not reply', () => __awaiter(void 0, void 0, void 0, function* () {
        whenIsPingThenReturn(false);
        yield service.handle(mockedMessageInstance).then(() => {
            // Successful promise is unexpected, so we fail the test
            chai_1.expect.fail('Unexpected promise');
        }).catch(() => {
            // Rejected promise is expected, so nothing happens here
        });
        ts_mockito_1.verify(mockedMessageClass.reply('pong!')).never();
    }));
    function setMessageContents() {
        mockedMessageInstance.content = "Non-empty string";
    }
    function whenIsPingThenReturn(result) {
        ts_mockito_1.when(mockedPingFinderClass.isTrigger("Non-empty string")).thenReturn(result);
    }
});
//# sourceMappingURL=ping.test.js.map