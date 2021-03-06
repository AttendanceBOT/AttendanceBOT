import {injectable} from "inversify";

@injectable()
export class FileFinder {

    private regexp = '!feuille';

    public isTriggerCommand(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}
