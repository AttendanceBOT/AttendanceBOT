import { injectable } from "inversify";

@injectable()
export class Help {

    private regexp = '!help';

    public isPing(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}