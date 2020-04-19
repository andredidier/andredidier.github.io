import {anything, instance, mock, verify} from "ts-mockito";
import {Database} from "../src/Database";
import {DatabaseCurriculum, RecordCurriculum} from "../src/curriculum/Curriculum";

describe('DatabaseCurriculum', () => {
    describe('#store(MemoryCurriculum)', () => {
        it('Should store the record', () => {
            let database: Database = mock<Database>();
            let id = "my-id";
            let expected: RecordCurriculum = instance(mock<RecordCurriculum>());

            new DatabaseCurriculum(id, instance(database)).store(expected);
            verify(database.store(id, anything())).once();
        });
        it('Should not store', () => {
            let database: Database = mock<Database>();
            let id = "my-id";
            new DatabaseCurriculum(id, instance(database)).store(null);
            verify(database.store(id, anything())).never();
        });
    });
});
