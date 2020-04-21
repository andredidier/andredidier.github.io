import {HTMLElementCurriculum} from "../curriculum/Curriculum";

export interface Database {
    store: <T>(key: string, value: T) => void;

    update: <T>(key: string, value: T) => void;

    get: <T>(key: string) => T;
}

export class HTMLElementDatabase extends HTMLElement implements Database {
    inner: Database;
    constructor() {
        super();
        this.inner = new LocalDatabase(window.localStorage);
    }
    get<T>(key: string): T {
        return this.inner.get(key);
    }

    store<T>(key: string, value: T): void {
        this.inner.store(key, value);
    }

    update<T>(key: string, value: T): void {
        this.inner.update(key, value);
    }
}

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