import {Database} from "../database/Database";

export interface Experience {

}

export class DatabaseExperience implements Experience {
    id: string;
    database: Database;

    constructor(id: string, database: Database) {
        this.id = id;
        this.database = database;
    }

    store(record: RecordExperience) {
        if (record == null) {
            return;
        }
        this.database.store(this.id, record);
    }
}

export class RecordExperience implements Experience {
    institution: string;
    roleIds: string[];

    constructor(institution: string, roleIds: string[]) {
        this.institution = institution;
        this.roleIds = roleIds;
    }
}
