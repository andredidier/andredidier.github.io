export interface Media<T extends Media<T>> {
    with: <V> (key: string, value: V) => Media<T>;
}

export class HtmlElementMedia<T extends HTMLElement> implements Media<HtmlElementMedia<T>> {
    element: T;

    constructor(element: T) {
        this.element = {...element};
    }

    with<V>(key: string, value: V) {
        this.element[key] = value;
        return new HtmlElementMedia<T>(this.element);
    }
}