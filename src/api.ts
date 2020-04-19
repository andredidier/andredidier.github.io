import {LocalDatabase} from "./LocalDatabase";

import {DatabaseCurriculum, RecordCurriculum} from "./Curriculum";
import {DatabaseActivity, RecordActivity} from "./Activity";
import {OpenEndRange} from "./Range";
import {DatabaseRole, RecordRole} from "./Role";
import {DatabaseExperience, RecordExperience} from "./Experience";


function init() {
    let db = new LocalDatabase();

    function buildBenevity(db: LocalDatabase) {
        let activities1: DatabaseActivity[] =
            [
                new DatabaseActivity("activity1", db)
            ];

        activities1[0].store(new RecordActivity(
            new OpenEndRange(new Date(2020, 1, 6)),
            "Software Development in a custom Content Management System."
        ));

        let roles1 = [
            new DatabaseRole("role1", db)
        ];
        roles1[0].store(new RecordRole(
            "Software developer",
            new OpenEndRange(new Date(2020, 1, 6)),
            activities1.map(activity => activity.id)));

        let experience = new DatabaseExperience("experience1", db);
        experience.store(new RecordExperience("Benevity", roles1.map(role => role.id)));
        return experience;
    }

    let experiences =
        [
            buildBenevity(db)
        ];


    let curriculum = new DatabaseCurriculum("alrd", db);
    curriculum.store(new RecordCurriculum(experiences.map(experience => experience.id), []));
}