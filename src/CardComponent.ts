export class CardComponent {
    mapping: object;
    contents: object;
    element: HTMLElement;

    constructor(mapping: object, contents: object, element: HTMLElement) {
        this.mapping = mapping;
        this.contents = contents;
        this.element = element;
    }

    print() {
        let headerElement = document.createElement("div");
        let bodyElement = document.createElement("div");
        headerElement.textContent = this.contents["title"];
        bodyElement.textContent = this.contents["body"];
        this.element.append(headerElement, bodyElement);
    }

    with(key: string, value: string) {
        let contents = {...this.contents};
        contents[this.mapping[key]] = value;
        return new CardComponent(this.mapping, contents, this.element);
    }
}