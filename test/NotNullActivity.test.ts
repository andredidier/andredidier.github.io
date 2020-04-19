import {anything, instance, mock, verify} from "ts-mockito";
import {Media} from "../src/Media";
import {expect} from "chai";
import {Activity, NotNullActivity} from "../src/Activity";

describe('NotNullActivity', () => {
    describe('#print(Media)', () => {
        it('Should return media', () => {
            let expected = mock<Media<any>>();
            let actual = new NotNullActivity(null).print(expected);
            expect(actual).equal(expected);
        });
        it('Should call inner print', () => {
            let inner = mock<Activity>();
            new NotNullActivity(instance(inner)).print(null);
            verify(inner.print(anything())).once();
        });
    });
});
