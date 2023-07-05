# Entity components
Entities are split into components and components are split into variables.
### v example v
```json
{
  "minecraft:entity": {

    "component_name": {
      "valuable_name": "value",
    },
            And
    "components": {
      "component_name": {
        "valuable_name": "value",
      }
    }
    
  }
}
```

# Here's a list of all biome components.

## **Desciption**
  - `identifer` Is used to identifie the entity in other files and is normally the entity's name or id and should be unique, if you use identifier of another entite it will overwrite it. **[required]**
  - `runtime_identfier` Is normally set to `Badger:badger_mob`. **[required]**
  - `is_summonable` It determines if the entite is summonable. **[required]**
####  v example v
```json
"description": {
      "identifier": "badger:mob_name",
      "runtime_identifier": "badger:badger_mob",
      "is_summonable": true //bolen
    },
```
## **Mushroom data**
  - `role` Determines the role of the entity. (Can be Animal, Melee, Special, Ranged, other)
  - `function` Determines the function of the entity. (Can Be PvP, other)
#### v example v
```json
"mushroom_data": {
      "role": "Ranged",
      "function": "PvP"
    },
```
## **Template**                                                                                        
  - The `badger:template` component is used to make an entity have all the same components of another entity without the need to rewrite them, 
  It is also a array so you can add multiple templates at the same time but they might conflict with etch other, Any of the components that are add by the template will be overridden by ones in the file.  
#### v example v
```json
"badger:template": [
        "badger:mob_skeleton"
      ],
```
## **Loot**
  - `table` Determines which loot talbe is droped when the entity is destroyed/killed.
#### v example v
```json
"badger:loot": {
        "table": "uncommon_mob"
      },
```
## **Spawn cost**
  - `costs` Is the cost of spawning the entity although it is largy irrelevant due to that normally being decided by the spawer it self.
  - `tickets` Is the number of soul flames cupped/taken by the entity if any.
#### v example v
```json 
"badger:spawn_costs": {
        "costs": [
          {
            "item": "diamond",
            "amount": 2
          },
          {
            "item": "emerald",
            "amount": 2
          }
        ],
        "tickets": [
          {
            "ticket": "spawn",
            "amount": 1
          }
        ]
      },
```
## Movement
- `move_speed` It is the speed at which the entity can move.
- `air_control_factor` it is how easy it is for the entity to turn around in the air.
#### v example v
```json
"badger:movement": {
        "move_speed": 4.5,
        "air_control_factor": 0.5
      },
```
## Physics
- `gravity` It is how strong is how much the force of gravity affects the entity - is more + is less.
- `friction` It is how much the entity is slowed down by touching the ground.
#### v example v
```json
"badger:physics": {
        "gravity": -30,
        "friction": 0.04
      },
```
