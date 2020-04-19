export interface Database {
    store: <T>(key: string, value: T) => void;

    update: <T>(key: string, value: T) => void;

    get: <T>(key: string) => T;
}