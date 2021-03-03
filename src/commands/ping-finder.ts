import {injectable} from "inversify";

@injectable()
export class PingFinder {

    private regexp = '!appel';

    public isTriggerCommand(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}
