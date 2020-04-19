import {Media} from "./Media";

export interface Range {
    print: <T extends Media<T>> (media: T) => Media<T>;
}

export class OpenEndRange implements Range {
    start: Date;

    constructor(start: Date) {
        this.start = start;
    }

    print<T extends Media<T>>(media: T) {
        return media.with("start", this.start).with("end", null);
    }
}
