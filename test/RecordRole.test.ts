import {instance, mock} from "ts-mockito";
import {Range} from "../src/Range";
import {expect} from "chai";
import {RecordRole} from "../src/curriculum/Role";

describe('RecordRole', () => {
    describe('#new', () => {
        it('Should save all properties', () => {
            let period = instance(mock<Range>());
            let activityIds = ["id1", "id2"];
            let name = "my-name";
            let actual = new RecordRole(name, period, activityIds);
            expect(actual.name).equal(name);
            expect(actual.period).equal(period);
            expect(actual.activityIds).equal(activityIds);
        });
    })
});
