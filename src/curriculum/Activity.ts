import {Media} from "../Media";
import {Database} from "../database/Database";
import {Range} from "../Range";


export interface Activity {
    print: <T extends Media<T>> (media: T) => Media<T>;
}

export class NotNullActivity implements Activity {
    inner: Activity;

    constructor(inner: Activity) {
        this.inner = inner;
    }

    print<T extends Media<T>>(media: T) {
        return this.inner == null ? media : this.inner.print(media);
    }
}

export class DatabaseActivity implements Activity {
    id: string;
    database: Database;

    constructor(id: string, database: Database) {
        this.id = id;
        this.database = database;
    }

    store(inner: RecordActivity) {
        if (inner == null) {
            return;
        }
        this.database.store(this.id, inner);
    }

    print<T extends Media<T>>(media: T) {
        let inner: Activity = new NotNullActivity(this.database.get(this.id));
        return inner.print(media);
    }
}

export class RecordActivity implements Activity {
    period: Range;
    description: string;

    constructor(period: Range, description: string) {
        this.period = period;
        this.description = description;
    }

    print<T extends Media<T>>(media: T) {
        let periodMedia: Media<T> = this.period.print(media);
        return periodMedia.with("description", this.description);
    }
}
