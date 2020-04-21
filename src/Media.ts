export interface Media<T extends Media<T>> {
    with: <V> (key: string, value: V) => Media<T>;
}