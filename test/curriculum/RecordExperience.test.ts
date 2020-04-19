import {expect} from "chai";
import {RecordExperience} from "../../src/curriculum/Experience";

describe('RecordExperience', () => {
    describe('#new', () => {
        it('Should save all properties', () => {
            let institution = "my-institution";
            let roleIds = ["id1", "id2"];
            let actual = new RecordExperience(institution, roleIds);
            expect(actual.institution).equal(institution);
            expect(actual.roleIds).equal(roleIds);
        });
    });
});
