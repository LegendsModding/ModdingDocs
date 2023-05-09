# Block Components

Here's a list of all block components, more documentation coming soon.

-   minecraft:destroy_time
-   minecraft:block_light_emission
-   badger:block_encounter
-   minecraft:block_shape
-   badger:disable_block_shadows
-   badger:ignored_by_pathfinding
-   badger:telemetry_category
-   badger:has_team
-   badger:liquid
-   badger:block_type
-   badger:block_damage_receiver_material
-   badger:terrain_type
-   badger:block_effects

### minecraft:block_shape

```json
{
    "minecraft:block_shape": {
        "directional_shape": true, // Boolean
        "directional_texture": true, // Boolean
        "camera_collision": true, //Boolean
        "connection_family": "block_path_attack_path_var01", //String
        "shape": "block", //String; For possible values, see our page on block shapes
        "render_layer": "opaque", //String; For possible values, see our page on block render layer
        "connect_to_solid": true, //Boolean
        "check_corners": true, //Boolean
        "collision_shape": "block", //String; For possible values, see our page on block collision
        "connect_to_family": "block_riverbed_blend_02" //String
    }
}
```

### minecraft:destroy_time

```json
{
    "minecraft:destroy_time": {
        "value": 10 //Int
    }
}
```

### minecraft:block_light_emission

```json
{
    "minecraft:block_light_emission": {
        "emission": [0, 0, 0, 0] //Array
    }
}
```

### badger:block_encounter

```json
{
    "badger:block_encounter": {
        "grant_resource": "unlock_journal_hazard_geyser" //String
    }
}
```

### badger:disable_block_shadows

```json
{
    "badger:disable_block_shadows": {}
}
```

### badger:ignored_by_pathfinding

```json
{
    "badger:ignored_by_pathfinding": {}
}
```

### badger:telemetry_category

```json
{
    "badger:telemetry_category": {
        "category_name": "Environmental" //String
    }
}
```

### badger:has_team

```json
{
    "badger:has_team": {}
}
```

### badger:liquid

```json
{
    "badger:liquid": {}
}
```

### badger:block_type

```json
{
    "badger:block_type": {
        "tags": ["gatherable_stone"] //Array
    }
}
```

### badger:block_damage_receiver_material

```json
{
    "badger:block_damage_receiver_material": {
        "material": "block" //String
    }
}
```

### badger:terrain_type

```json
{
    "badger:terrain_type": {
        "terrain": "stone" //String; For possible values, see our page on block terrain types
    }
}
```

### badger:block_effects

```json
{
    "badger:block_effects": {
        "damage_types": "hazard", //String; 'hazard', 'lava', 'fire'
        "effect_frequency": 0.5, //Float
        "apply_status": {
            "engaged": {
                "strength": 1.0 //Float
            },
            "wet": {
                "strength": 1.0 //Float
            },
            "player_jump": {
                "strength": 1.0 //Float
            },
            "player_speed": {
                "strength": 1.0 //Float
            },
            "burning": {
                "strength": 1.0 //Float
            },
            "lava": {
                "strength": 1.0 //Float
            },
            "healing_stone": {
                "strength": 1.0 //Float
            },
            "poisoned": {
                "strength": 1.0 //Float
            },
            "slowed_tar": {
                "strength": 1.0 //Float
            },
            "water": {
                "strength": 1.0 //Float
            },
            "slowed_thorns": {
                "strength": 1.0 //Float
            },
            "poisoned_no_vfx": {
                "strength": 1.0 //Float
            },
            "slowed_piglin_bramble": {
                "strength": 1.0 //Float
            }
        },
        "damage_amount": 0.25 //Float
    }
}
```
