import {Database} from "../database/Database";
import {Range} from "../Range";

export interface Education {

}

export class DatabaseEducation implements Education {
    id: string;
    database: Database;

    constructor(id: string, database: Database) {
        this.id = id;
        this.database = database
    }

    store(record: RecordEducation) {
        if (record == null) {
            return;
        }
        this.database.store(this.id, record);
    }
}

export class RecordEducation implements Education {
    school: string;
    title: string;
    period: Range;

    constructor(school: string, title: string, period: Range) {
        this.school = school;
        this.title = title;
        this.period = period;
    }
}
