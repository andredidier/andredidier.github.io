import {anything, instance, mock, verify} from "ts-mockito";
import {Database} from "../src/Database";
import {DatabaseEducation, RecordEducation} from "../src/curriculum/Education";

describe('DatabaseEducation', () => {
    describe('#store(MemoryEducation)', () => {
        it('Should store the record', () => {
            let database: Database = mock<Database>();
            let id = "my-id";
            let expected: RecordEducation = instance(mock<RecordEducation>());

            new DatabaseEducation(id, instance(database)).store(expected);
            verify(database.store(id, anything())).once();
        });
        it('Should not store', () => {
            let database: Database = mock<Database>();
            let id = "my-id";
            new DatabaseEducation(id, instance(database)).store(null);
            verify(database.store(id, anything())).never();
        });
    });
});
