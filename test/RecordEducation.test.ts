import {instance, mock} from "ts-mockito";
import {Range} from "../src/Range";
import {expect} from "chai";
import {RecordEducation} from "../src/Education";

describe('RecordEducation', () => {
    describe('#new', () => {
        it('Should save all properties', () => {
            let period = instance(mock<Range>());
            let school = "my-school";
            let title = "my-title";
            let actual = new RecordEducation(school, title, period);
            expect(actual.school).equal(school);
            expect(actual.period).equal(period);
            expect(actual.title).equal(title);
        });
    })
});
