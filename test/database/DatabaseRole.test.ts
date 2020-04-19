import {Database} from "../../src/database/Database";
import {anything, instance, mock, verify} from "ts-mockito";
import {DatabaseRole, RecordRole} from "../../src/curriculum/Role";

describe("DatabaseRole", () => {
    describe("#store(RecordRole)", () => {
        it('Should store the record', () => {
            let database: Database = mock<Database>();
            let id = "my-id";
            let expected: RecordRole = instance(mock<RecordRole>());

            new DatabaseRole(id, instance(database)).store(expected);
            verify(database.store(id, anything())).once();
        });
        it('Should not store', () => {
            let database: Database = mock<Database>();
            let id = "my-id";
            new DatabaseRole(id, instance(database)).store(null);
            verify(database.store(id, anything())).never();
        });
    });
});