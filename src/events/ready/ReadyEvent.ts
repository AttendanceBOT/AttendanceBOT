import BaseEvent from '../../utils/structures/BaseEvent';
export default class ReadyEvent extends BaseEvent {
    constructor() {
        super(`ready`);
    }
    async run () {
        console.log(`Bot has logged in.`);
    }
}
