import {instance, mock} from "ts-mockito";
import {Range} from "../src/Range";
import {expect} from "chai";
import {RecordCurriculum} from "../src/Curriculum";

describe('RecordCurriculum', () => {
    describe('#new', () => {
        it('Should save all properties', () => {
            let educationIds = ["id1", "id2"];
            let experienceIds = ["id3", "id4"];
            let actual = new RecordCurriculum(experienceIds, educationIds);
            expect(actual.experienceIds).equal(experienceIds);
            expect(actual.educationIds).equal(educationIds);
        });
    })
});
