---
title: Block Components
---

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

Defines the block's shape.

```json
{
    "minecraft:block_shape": {
        "directional_shape": true, // Defines if the block shape rotates on placement
        "directional_texture": true, // Defines if the block's texture rotates based on placement
        "camera_collision": true, // Defines if the block triggers camera avoidance"
        "connection_family": "block_path_attack_path_var01", // Defines this block as part of a connection family
        "shape": "block", // Defines the shape of the block; For possible values, see our page on block shapes
        "render_layer": "opaque", // Defines what render layer to use; For possible values, see our page on block render layer
        "connect_to_solid": true, // Defines if the block will connect to all solid blocks
        "check_corners": true, // Defines if the block will check for corner block variations
        "collision_shape": "block", // Defines the shape of the block's collision shape; For possible values, see our page on block collision
        "connect_to_family": "block_riverbed_blend_02" // Defines that this block can connect to blocks of this family
    }
}
```

### minecraft:destroy_time

Sets the destroy time property for the block. Greater numbers result in greater mining times.

```json
{
    "minecraft:destroy_time": {
        "value": 10
    }
}
```

### minecraft:block_light_emission

The amount of light this block will emit in [R, G, B, A].

```json
{
    "minecraft:block_light_emission": {
        "emission": [0, 0, 0, 0]
    }
}
```

### badger:block_encounter

Makes the block give the specified resource to the player's team. Used for revealing narrative's journal entries.

```json
{
    "badger:block_encounter": {
        "grant_resource": "unlock_journal_hazard_geyser"
    }
}
```

### badger:disable_block_shadows

Prevents the block from casting shadows.

```json
{
    "badger:disable_block_shadows": {}
}
```

### badger:ignored_by_pathfinding

Makes the block unwalkable.

```json
{
    "badger:ignored_by_pathfinding": {}
}
```

### badger:telemetry_category

Category name for damage category.

```json
{
    "badger:telemetry_category": {
        "category_name": "Environmental"
    }
}
```

### badger:has_team

Makes the block have a team.

```json
{
    "badger:has_team": {}
}
```

### badger:liquid

Makes the block a liquid.

```json
{
    "badger:liquid": {}
}
```

### badger:block_type

Defines the tags for the block.

```json
{
    "badger:block_type": {
        "tags": ["gatherable_stone"]
    }
}
```

### badger:block_damage_receiver_material

Defines the material to be used for when this block is hit.

```json
{
    "badger:block_damage_receiver_material": {
        "material": "block"
    }
}
```

### badger:terrain_type

Allows association of a material category to blocks.

```json
{
    "badger:terrain_type": {
        "terrain": "stone" // For possible values, see our page on block terrain types
    }
}
```

### badger:block_effects

Makes the block deal damage when entities come in contact.

```json
{
    "badger:block_effects": {
        "damage_types": "hazard", // Types of damage to apply; 'hazard', 'lava', 'fire'
        "effect_frequency": 0.5, // Frequency of damage
        "apply_status": {
            "engaged": {
                "strength": 1.0
            },
            "wet": {
                "strength": 1.0
            },
            "player_jump": {
                "strength": 1.0
            },
            "player_speed": {
                "strength": 1.0
            },
            "burning": {
                "strength": 1.0
            },
            "lava": {
                "strength": 1.0
            },
            "healing_stone": {
                "strength": 1.0
            },
            "poisoned": {
                "strength": 1.0
            },
            "slowed_tar": {
                "strength": 1.0
            },
            "water": {
                "strength": 1.0
            },
            "slowed_thorns": {
                "strength": 1.0
            },
            "poisoned_no_vfx": {
                "strength": 1.0
            },
            "slowed_piglin_bramble": {
                "strength": 1.0
            }
        },
        "damage_amount": 0.25 // Amount of damage dealt
    }
}
```
