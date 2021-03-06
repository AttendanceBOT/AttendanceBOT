import {inject, injectable} from "inversify";
import {TYPES} from "../../types";

@injectable()
export class SaintTrigger {
    private regexp = 'saint';
    private readonly prefix: string;

    constructor(@inject(TYPES.Prefix) prefix: string) {
        this.prefix = prefix;
    }

    public isTrigger(stringToSearch: string): boolean {
        return stringToSearch.startsWith(this.prefix) && stringToSearch.search(this.regexp) >= 0;
    }
}
