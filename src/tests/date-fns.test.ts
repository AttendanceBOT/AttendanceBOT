import "reflect-metadata";
import 'mocha';
import { expect } from 'chai';
import { instance, mock } from "ts-mockito";
import { DateFormat } from "../utils/date";
import { Message } from "discord.js";

const assert = require('chai').assert;

describe('Date FNS', () => {
    let mockedDateFNSClass: DateFormat;
    let mockedDateFNSInstance: DateFormat;
    let mockedMessageClass: Message;
    let mockedMessageInstance: Message;
    let service: DateFormat;

    beforeEach(() => {
        mockedDateFNSClass = mock(DateFormat);
        mockedDateFNSInstance = instance(mockedDateFNSClass);
        mockedMessageClass = mock(Message);
        mockedMessageInstance = instance(mockedMessageClass);

        setMessageContents();

        service = new DateFormat();
    })

    it('should reply the good month API', async () => {
        const date = new Date()
        assert.equal(service.monthAPI(), (date.getMonth()+1));
        expect(service.monthAPI()).to.equal((date.getMonth()+1).toString())
    })

    it('shouldnt reply the good month API', async () => {
        const date = new Date()
        expect(service.monthAPI()).to.not.equal((date.getMonth()).toString());
    })

    it('shoul reply the good day API', async () => {
        const date = new Date()
        expect(service.dayAPI()).to.equal((date.getDate()).toString());
    })

    it('shouldnt reply the good day API', async () => {
        const date = new Date()
        expect(service.dayAPI()).to.not.equal((date.getDate()));
    })

    it('should reply the good day CSV', async () => {
        const date = new Date()
        expect(service.dateCSV()).to.equal(('0'+date.getDate()).slice(-2) + '/' + ('0'+(date.getMonth()+1)).slice(-2) +
            '/' + date.getFullYear() + ' ' + ('0'+date.getHours()).slice(-2) +
            ':' + ('0'+date.getMinutes()).slice(-2));
    })

    it('shouldnt reply the good day CSV', async () => {
        const date = new Date()
        expect(service.dateCSV()).to.not.equal(('0'+date.getDate()).slice(-2) + '/' + ('0'+(date.getMonth())).slice(-2) +
            '/' + date.getFullYear() + ' ' + ('0'+date.getHours()).slice(-2) +
            ':' + ('0'+date.getMinutes()).slice(-2));
    })

    it('should reply the good day', async () => {
        const date = new Date()
        expect(service.dateFR()).to.equal(('0'+date.getDate()).slice(-2) + '/' + ('0'+(date.getMonth()+1)).slice(-2) +
            '/' + date.getFullYear() + ' ' + ('0'+date.getHours()).slice(-2) +
            ':' + ('0'+date.getMinutes()).slice(-2)+ ':' + ('0'+date.getSeconds()).slice(-2));
    })

    it('shouldnt reply the good day', async () => {
        const date = new Date()
        expect(service.dateFR()).to.not.equal(('0'+date.getDate()).slice(-2) + '/' + ('0'+(date.getMonth())).slice(-2) +
            '/' + date.getFullYear() + ' ' + ('0'+date.getHours()).slice(-2) +
            ':' + ('0'+date.getMinutes()).slice(-2)+ ':' + ('0'+date.getSeconds()).slice(-2));
    })

    function setMessageContents() {
        mockedMessageInstance.content = "Non-empty string";
    }
});
