---
title: Biome Components
---

# Biome Components

Here's a list of all biome components, more documentation coming soon.

-   minecraft:surface_parameters
-   badger:fatefullands_surface
-   badger:overworld_height
-   badger:jungle_egg
-   badger:rivers
-   badger:sub_biomes
-   badger:visual_biome_attributes
-   badger:custom_water_level
-   badger:icewave

### minecraft:surface_parameters

Defines the blocks that make up the biome.

```json
{
    "minecraft:surface_parameters": {
        "foundation_material": "badger:block_stone", // Block
        "sea_floor_depth": 7, // Int
        "sea_extra_material": "badger:block_water", // Block
        "sea_floor_material": "badger:block_water", // Block
        "use_lower_wetness_bits": true, // Boolean
        "default_surface": {
            "mid_material": "badger:block_water",
            "top_material": "badger:block_water",
            "weighted_top_materials": [
                ["badger:block_sand", 1],
                ["minecraft:grass", 1]
            ]
        },
        "wetness_height_max": 22, // Int
        "wetness_height_min": 17, // Int
        "sea_material": "badger:block_water", // Block
        "air_material": "minecraft:air", // Block
        "override_subchunk_optimization": true // Boolean
    }
}
```

-   `top_material` - Defines the material to be used for the highest level
-   `mid_material` - Defines the material to be used between the top and the foundation
-   `foundation_material` - Defines the material to be used under the mid material
-   `sea_floor_depth` - Defines how deep rivers and lakes will be
-   `sea_floor_material` - Defines the material to be used for the river's and lake's floor
-   `sea_extra_material` - Unknown
-   `use_lower_wetness_bits` - Unknown
-   `wetness_height_max` - Unknown
-   `wetness_height_min` - Unknown
-   `air_material` - Defines the material to be used for the empty spaces in a chunk
-   `override_subchunk_optimization` - Unknown

::: warning
TODO: Document this

-   ordered_surface
-   conditional_top

:::

### badger:fatefullands_surface

Creates the terrain from the campaign on which the Well Of Fate sits upon

```json
{
    "badger:fatefullands_surface": {
        "hill_noise_frequency": 0.25, // Float
        "hill_noise_amplitude": 1.8, // Float
        "hill_top_height": 25, // Int
        "hill_width_scale": 75, // Int
        "river_noise_scale": 1.5, // Float
        "rivers": [
            [110, 5, 5],
            [150, 5, 5]
        ]
    }
}
```

-   `hill_noise_frequency` - Controls the noise frequency

    -   Can be 0

-   `hill_noise_amplitude` - Controls the noise amplitude

    -   Can be 0

-   `hill_top_height` - Controls the max height the hill can be

    -   Can be 0

-   hill_width_scale - Controls the max width the hill can be

    -   Can be 0

-   `river_noise_scale` - Controls the noise scale for the rivers

    -   Can be 0

-   `rivers` - Controls how many rings of rivers there are
    -   First index is for the height
    -   Second index is for the width
    -   Third index is unknown. Could be related to noise

### badger:overworld_height

Defines the biome's terrain shape.

```json
{
    "badger:overworld_height": {
        "frequency_scale": 1.4, // Float
        "noise_params": [0.05, 0.0],
        "height_params": {
            "clamp_heights": [18, 20],
            "geology_heights": [31, 39],
            "texture_heights": [31, 39],
            "clamp_scales": [0.25, 0.75],
            "average_height": 25
        },
        "mark_as_wet_in_geology_layer": true, // Boolean
        "noise_type": "default", // ['deep_ocean', 'default', 'mountains', 'beach']
        "mark_as_wet_when_stamped": true
    }
}
```

-   `frequency_scale` - Defines the frequency of the noise
    -   Min of 1
    -   Max of 5
-   `noise_params` - Defines the noise params
    -   Both indices can be 0, creates a flat ish terrain
    -   First index can be negative, value from 2.4-2.5 creates a gap between the Bedrock layer and the terrain
    -   Second index can be negative, any value past 5 has the same effects. Negative values creates a gap between the Bedrock layer and the terrain
-   `height_params` - Unknown
    -   average_height - required
-   `mark_as_wet_in_geology_layer` - Unknown
-   `mark_as_wet_when_stamped` - Unknown
-   `noise_type` - Uses predefined noise

### badger:jungle_egg

Unknown

```json
{
    "badger:jungle_egg": {}
}
```

### badger:rivers

Defines the rivers that create the borders between biomes

```json
{
    "badger:rivers": {
        "river_biome": "grasslands_rivers", // Biome
        "point_chance": 0.5, // Float
        "river_border_width": 6, // Int
        "river_border_biome": "grasslands_mud_pit_border", // Biome
        "river_width": 4, // Int
        "cell_range": [1, 1]
    }
}
```

### badger:sub_biomes

```json
{
    "badger:sub_biomes": {
        "scatter_biomes": [
            {
                "biome": "grasslands_mud_pit",
                "offSetZ": 150.0,
                "scaleX": 100,
                "scaleY": 100,
                "threshold": 0.867
            }
        ],
        "borders": [
            {
                "allowlist": [
                    "brokenlands",
                    "brokenlands_sanddune",
                    "brokenlands_tarpits",
                    "drylands",
                    "drylands_enable_hoodoos",
                    "burnt_grass"
                ],
                "biome": "burnt_grass",
                "width": 24
            },
            {
                "allowlist": [
                    "frostlands",
                    "frostlands_hills",
                    "frostlands_springs",
                    "frosty_grass"
                ],
                "biome": "frosty_grass",
                "width": 24
            },
            {
                "allowlist": ["jungle", "jungle_hills", "sparse_jungle"],
                "biome": "sparse_jungle",
                "width": 24
            }
        ]
    }
}
```

### badger:visual_biome_attributes

```json
{
    "badger:visual_biome_attributes": {
        "map": {
            "map_color_odd": "#606060", // Hex
            "map_pattern_index": 9, // Int
            "map_color": "#1BD247", // Hex
            "biome_banner": "map_screen/banners/legend_banner_biome_fatelands.png", // Texture path
            "common_resource_icon": "/icons/resources/resource_redstone.png", // Texture path
            "biome_display_name": "grasslands" // String
        },
        "world": {
            "sky_weight": 2.0 // Float
        },
        "rain": {
            "downfall": 50.0, // Float
            "snow_to_rain_density_ratio": 0.75, // Float
            "rain_to_snow_transition_size": 5, // Int
            "upper_limit": 0.8, // Float
            "lower_limit": 0.1, // Float
            "rain_to_snow_height": 125 // Int
        },
        "grass": {
            "overlay": {
                "grass_overlay_surface_color": "#C18131", // Hex
                "grass_overlay_noise_intensity": 1.2, // Float
                "grass_overlay_noise_bias": 0.5, // Float
                "grass_overlay_noise_scale": 0.5 // Float
            },
            "normal": {
                "grass_surface_color": "#000000", // Hex
                "grass_noise_scale": 1.2, // Float
                "grass_noise_intensity": 0.8 // Float
            }
        },
        "particulates": {
            "sparkles": 1.0, // Float
            "nether_spores": 0.5 // Float
        },
        "water": {
            "water_blur_distance": 1.5, // Float
            "water_depths_color": "#DBBC7A", // Hex
            "water_surface_transparency": 0.65, // Float
            "water_color_blend_distance": 2.5, // Float
            "water_surface_color": "#EE0000" // Hex
        }
    }
}
```

### badger:custom_water_level

```json
{
    "badger:custom_water_level": {
        "water_level": 1 // Int
    }
}
```

### badger:icewave

Places ice waves.

```json
{
    "badger:icewave": {}
}
```
