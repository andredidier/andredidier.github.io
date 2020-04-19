import {anything, instance, mock, verify, when} from "ts-mockito";
import {Database} from "../../src/database/Database";
import {DatabaseActivity, RecordActivity} from "../../src/curriculum/Activity";

describe('DatabaseActivity', () => {
    describe('#store(MemoryActivity)', () => {
        it('Should store the record', () => {
            let database: Database = mock<Database>();
            let id = "my-id";
            let expected: RecordActivity = instance(mock<RecordActivity>());

            new DatabaseActivity(id, instance(database)).store(expected);
            verify(database.store(id, anything())).once();
        });
        it('Should not store', () => {
            let database: Database = mock<Database>();
            let id = "my-id";
            new DatabaseActivity(id, instance(database)).store(null);
            verify(database.store(id, anything())).never();
        });
    });
    describe('#print(Media)', () => {
        it('Should fetch media and print fetched activity', () => {
            let database: Database = mock<Database>();
            let id = "my-id";
            let record: RecordActivity = mock<RecordActivity>();

            when(database.get<RecordActivity>(id)).thenReturn(instance(record));

            new DatabaseActivity(id, instance(database)).print(null);

            verify(record.print(null)).once();
        });
    });
});
