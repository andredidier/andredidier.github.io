import {anything, instance, mock, when} from "ts-mockito";
import {Range} from "../src/Range";
import {Media} from "../src/Media";
import {expect} from "chai";
import {RecordActivity} from "../src/curriculum/Activity";

describe('RecordActivity', () => {
    describe('#print(Media)', () => {
        it('Should modify media', () => {
            let media = mock<Media<any>>();
            let mediaInstance = instance(media);
            let media2 = mock<Media<any>>();
            let mediaInstance2 = instance(media2);
            let period = mock<Range>();

            when(media.with(anything(), anything())).thenReturn(mediaInstance2);
            when(media2.with(anything(), anything())).thenReturn(mediaInstance2);
            when(period.print(anything())).thenReturn(mediaInstance2);
            let actual = new RecordActivity(instance(period), "description").print(mediaInstance);
            expect(actual).to.not.equal(mediaInstance);
        });
    });
    describe('#new', () => {
        it('Should save all properties', () => {
            let period = instance(mock<Range>());
            let description = "any description";
            let actual = new RecordActivity(period, description);
            expect(actual.period).equal(period);
            expect(actual.description).equal(description);
        });
    });
});
