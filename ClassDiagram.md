```mermaid
    classDiagram
        CRUDService <|-- MonsterService
        CRUDService <|-- ClassService
        CRUDService <|-- RaceService

        MonsterService<--EncounterCreator


        class CRUDService{
            +String url
            +getAll()
            +getOne()
        }

        class EncounterCreator{
            +getRandomMonsters(challengeRating)
        }

```