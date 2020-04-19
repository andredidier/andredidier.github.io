import {OpenEndRange} from "../src/Range";
import {Media} from "../src/Media";
import {anything, instance, mock, when} from "ts-mockito";
import {expect} from "chai";

describe('OpenEndRange', () => {
    describe('#print(Media)', () => {
        it('Should modify media', () => {
            let media = mock<Media<any>>();
            let mediaInstance = instance(media);
            let media2 = mock<Media<any>>();
            let mediaInstance2 = instance(media2);

            when(media.with(anything(), anything())).thenReturn(mediaInstance2);
            when(media2.with(anything(), anything())).thenReturn(mediaInstance2);
            let actual = new OpenEndRange(new Date()).print(mediaInstance);
            expect(actual).to.not.equal(mediaInstance);
        });
    });
});