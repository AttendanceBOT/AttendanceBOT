import "reflect-metadata";
import 'mocha';
import {expect} from 'chai';
import {AppelTrigger} from "../commands/appel-trigger"
import {EmbedRoll} from "../services/embed-roll";
import {instance, mock, verify, when} from "ts-mockito";
import {Message} from "discord.js";
import {DateFormat} from "../utils/date";
import {FileRoll} from "../services/file-roll";

describe('EmbedRoll', () => {
    let mockedPingFinderClass: AppelTrigger;
    let mockedPingFinderInstance: AppelTrigger;
    let mockedMessageClass: Message;
    let mockedMessageInstance: Message;
    let mockedDateFNSClass: DateFormat;
    let mockedDateFNSInstance: DateFormat;
    let mockedFileRoleClass: FileRoll;
    let mockedFileRoleInstance: FileRoll;

    let service: EmbedRoll;

    beforeEach(() => {
        mockedPingFinderClass = mock(AppelTrigger);
        mockedPingFinderInstance = instance(mockedPingFinderClass);
        mockedDateFNSClass = mock(DateFormat);
        mockedDateFNSInstance = instance(mockedDateFNSClass);
        mockedMessageClass = mock(Message);
        mockedMessageInstance = instance(mockedMessageClass);
        mockedFileRoleClass = mock(FileRoll);
        mockedFileRoleInstance = instance(mockedFileRoleClass)
        setMessageContents();

        service = new EmbedRoll(mockedPingFinderInstance, mockedDateFNSInstance, mockedFileRoleInstance);
    })

    it('should not reply', async () => {
        whenIsPingThenReturn(false);

        await service.handle(mockedMessageInstance).then(() => {
            // Successful promise is unexpected, so we fail the test
            expect.fail('Unexpected promise');
        }).catch(() => {
            // Rejected promise is expected, so nothing happens here
        });

        verify(mockedMessageClass.reply('pong!')).never();
    })

    function setMessageContents() {
        mockedMessageInstance.content = "Non-empty string";
    }

    function whenIsPingThenReturn(result: boolean) {
        when(mockedPingFinderClass.isTrigger("Non-empty string")).thenReturn(result);
    }
});
