import {Database} from "./Database";
import {Range} from "./Range";

export interface Role {
}

export class DatabaseRole implements Role {
    id: string;
    database: Database;

    constructor(id: string, database: Database) {
        this.id = id;
        this.database = database;
    }

    store(record: RecordRole) {
        if (record == null) {
            return;
        }
        this.database.store(this.id, record);
    }
}

export class RecordRole implements Role {
    name: string;
    period: Range;
    activityIds: string[];

    constructor(name: string, period: Range, activityIds: string[]) {
        this.name = name;
        this.period = period;
        this.activityIds = activityIds;
    }

}
