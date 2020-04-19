import {HtmlElementMedia} from "../src/Media";

import {expect} from "chai";
import {mock} from "ts-mockito";

describe('HtmlElementMedia', () => {
    describe('#with(key,value)', () => {
        it('Should return a copy of the original element', () => {
            const a: HTMLAnchorElement = mock<HTMLAnchorElement>();
            let expected = "my-ref";
            a.href = expected;
            let media = new HtmlElementMedia(a).with("href", "new href");
            expect(a.href).equal(expected);
        });
        it('Should return a copy with the updated property', () => {
            const a: HTMLAnchorElement = mock<HTMLAnchorElement>();
            let expected = "my-ref";
            let media = new HtmlElementMedia(a).with("href", expected);
            expect(media.element.href).equal(expected);
        });
    });
});
