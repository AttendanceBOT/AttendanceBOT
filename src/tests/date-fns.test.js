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
const ts_mockito_1 = require("ts-mockito");
const date_1 = require("../utils/date");
const discord_js_1 = require("discord.js");
const assert = require('chai').assert;
describe('Date FNS', () => {
    let mockedDateFNSClass;
    let mockedDateFNSInstance;
    let mockedMessageClass;
    let mockedMessageInstance;
    let service;
    beforeEach(() => {
        mockedDateFNSClass = ts_mockito_1.mock(date_1.DateFormat);
        mockedDateFNSInstance = ts_mockito_1.instance(mockedDateFNSClass);
        mockedMessageClass = ts_mockito_1.mock(discord_js_1.Message);
        mockedMessageInstance = ts_mockito_1.instance(mockedMessageClass);
        setMessageContents();
        service = new date_1.DateFormat();
    });
    it('should reply the good month API', () => __awaiter(void 0, void 0, void 0, function* () {
        const date = new Date();
        assert.equal(service.monthAPI(), (date.getMonth() + 1));
        chai_1.expect(service.monthAPI()).to.equal((date.getMonth() + 1).toString());
    }));
    it('shouldnt reply the good month API', () => __awaiter(void 0, void 0, void 0, function* () {
        const date = new Date();
        chai_1.expect(service.monthAPI()).to.not.equal((date.getMonth()).toString());
    }));
    it('shoul reply the good day API', () => __awaiter(void 0, void 0, void 0, function* () {
        const date = new Date();
        chai_1.expect(service.dayAPI()).to.equal((date.getDate()).toString());
    }));
    it('shouldnt reply the good day API', () => __awaiter(void 0, void 0, void 0, function* () {
        const date = new Date();
        chai_1.expect(service.dayAPI()).to.not.equal((date.getDate()));
    }));
    it('should reply the good day CSV', () => __awaiter(void 0, void 0, void 0, function* () {
        const date = new Date();
        chai_1.expect(service.dateCSV()).to.equal(('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) +
            '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) +
            ':' + ('0' + date.getMinutes()).slice(-2));
    }));
    it('shouldnt reply the good day CSV', () => __awaiter(void 0, void 0, void 0, function* () {
        const date = new Date();
        chai_1.expect(service.dateCSV()).to.not.equal(('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth())).slice(-2) +
            '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) +
            ':' + ('0' + date.getMinutes()).slice(-2));
    }));
    it('should reply the good day', () => __awaiter(void 0, void 0, void 0, function* () {
        const date = new Date();
        chai_1.expect(service.dateFR()).to.equal(('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) +
            '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) +
            ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2));
    }));
    it('shouldnt reply the good day', () => __awaiter(void 0, void 0, void 0, function* () {
        const date = new Date();
        chai_1.expect(service.dateFR()).to.not.equal(('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth())).slice(-2) +
            '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) +
            ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2));
    }));
    function setMessageContents() {
        mockedMessageInstance.content = "Non-empty string";
    }
});
//# sourceMappingURL=date-fns.test.js.map