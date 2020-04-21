import {Database, HTMLElementDatabase} from "../database/Database";

export interface Curriculum {
}

export class HTMLElementCurriculum extends HTMLElement implements Curriculum {
    private curriculumId: string;
    constructor(curriculumId?: string) {
        super();
        console.log("Putz");
        this.curriculumId = curriculumId;
        this._updateRendering();
    }
    static get observedAttributes() {
        return ["curriculumId"];
    }

    connectedCallback() {
        console.log("Putz");
        this.innerHTML = "Bla";
        this.appendChild(document.createTextNode("Oie"));
    }
    // attributeChangedCallback(name: string, oldValue: object, newValue: object) {
    //     this[name] = newValue;
    //     this._updateRendering();
    // }

    private _updateRendering() {
        // update contents after property change
        this.textContent = "Bla";
        this.appendChild(document.createTextNode("Oie"));
    }
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
