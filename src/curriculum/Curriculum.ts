import {Database} from "../database/Database";

export interface Curriculum {
}

export class DatabaseCurriculum implements Curriculum {
    id: string;
    database: Database;

    constructor(id: string, database: Database) {
        this.id = id;
        this.database = database;
    }

    store(record: RecordCurriculum) {
        if (record == null) {
            return;
        }
        this.database.store(this.id, record);
    }
}

export class RecordCurriculum implements Curriculum {
    experienceIds: string[];
    educationIds: string[];

    constructor(experienceIds: string[], educationIds: string[]) {
        this.experienceIds = experienceIds;
        this.educationIds = educationIds;
    }
}
