import {Database} from "./Database";

export class LocalDatabase implements Database {
    storage: Storage;

    constructor(storage?: Storage) {
        this.storage = storage || window.localStorage;
    }

    get<T>(key: string) {
        return JSON.parse(this.storage.getItem(key));
    }

    store<T>(key: string, value: T) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    update<T>(key: string, value: T) {
        let existing = JSON.parse(this.storage.getItem(key));
        this.storage.setItem(key, JSON.stringify({...existing, ...value}));
    }
}