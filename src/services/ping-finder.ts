import {injectable} from "inversify";

@injectable()
export class PingFinder {

    private regexp = 'tiz';

    public isPing(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}
