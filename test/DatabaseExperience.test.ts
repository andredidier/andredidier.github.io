import {anything, instance, mock, verify} from "ts-mockito";
import {Database} from "../src/Database";
import {DatabaseExperience, RecordExperience} from "../src/curriculum/Experience";

describe('DatabaseExperience', () => {
    describe('#store(MemoryExperience)', () => {
        it('Should store the record', () => {
            let database: Database = mock<Database>();
            let id = "my-id";
            let expected: RecordExperience = instance(mock<RecordExperience>());

            new DatabaseExperience(id, instance(database)).store(expected);
            verify(database.store(id, anything())).once();
        });
        it('Should not store', () => {
            let database: Database = mock<Database>();
            let id = "my-id";
            new DatabaseExperience(id, instance(database)).store(null);
            verify(database.store(id, anything())).never();
        });
    });
});
