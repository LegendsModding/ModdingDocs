---
title: Intro to Biomes
nav_order: 1
---

# Intro to Biomes
Minecraft Legends allows us to create **custom** biomes or **override** vanilla biomes.

# Biomes in Minecraft Legends
Biomes describe how a local patch of the world should look and behave. By writing custom biome data you could:
1) Change the general shape of terrain for a biome.
2) Change the ratio of frequency of biome types.
3) Change the blocks that make up the biome, both at the surface and below.
4) Change the distribution of decorative features (e.g. trees, grass, etc.) for a biome.
5) ...and more!

# JSON format

All biomes should specify the version that they target via the "format_version" field. The remainder of the biome data is divided up into independent JSON sub-objects, or components. In general you can think of the presence of a component as defining what game behaviors a biome participates in with the component fields defining how it participates. Broadly there are two categories of components:
1) Namespaced components (i.e. those with a 'name:' prefix) map to specific behaviors in-game; they may have member fields that parameterize that behavior; only names that have a valid mapping are supported.
2) Components with no namespace are treated as 'tags': any name consisting of alphanumeric characters, '.' and '_' is permitted; the tag is attached to the biome so that either code or data may check for its existence; tag components may not have member fields.

See the full biome [schematic](../world-generation/biomes/biome-schematic) for additional details and the full list of namespaced components.

**Here is a sample biome**
```
{
   "format_version" : "1.13.0",
   "minecraft:biome" : {
      "components" : {
         "badger:overworld_height" : {
            "height_params" : {
               "average_height" : 21,
               "texture_heights": [15, 24],
               "clamp_heights": [17, 22],
               "clamp_scales": [1.0, 0.5]
            },
            "noise_type" : "beach"
         },
         "badger:rivers" : {
            "river_biome" : "beach_rivers"
         },
         "badger:sub_biomes" : {
            "borders" : [
               {
                  "allowlist" : [ "mud_pit", "mud_pit_border" ],
                  "biome" : "forest_clamp_lower",
                  "width" : 8
               },
               {
                  "allowlist" : [ "grasslands_mud_pit", "grasslands_mud_pit_border" ],
                  "biome" : "grasslands_clamp_lower",
                  "width" : 8
               }
            ]
         },
         "badger:visual_biome_attributes" : {
            "grass" : {
               "normal" : {
                  "grass_noise_intensity" : 0.50,
                  "grass_noise_scale" : 0.50,
                  "grass_surface_color" : "#BBD669"
               },
               "overlay" : {
                  "grass_overlay_noise_bias" : 0.0,
                  "grass_overlay_noise_intensity" : 0.0,
                  "grass_overlay_noise_scale" : 0.0,
                  "grass_overlay_surface_color" : "#000000"
               }
            },
            "map" : {
               "biome_banner" : "",
               "biome_display_name" : "beach",
               "common_resource_icon" : "",
               "map_color" : "#916d2f",
               "map_color_odd" : "#916d2f",
               "map_pattern_index" : 11
            },
            "particulates" : {
               "nether_spores" : 0.0,
               "sparkles" : 0.0
            },
            "rain" : {
               "downfall" : 10.0,
               "lower_limit" : 0.4000000059604645,
               "rain_to_snow_height" : 120,
               "rain_to_snow_transition_size" : 5,
               "snow_to_rain_density_ratio" : 0.75,
               "upper_limit" : 1.0
            },
            "water" : {
               "water_blur_distance" : 16.0,
               "water_color_blend_distance" : 6.0,
               "water_depths_color" : "#008D98",
               "water_surface_color" : "#00CBCB",
               "water_surface_transparency" : 1.0
            }
         },
         "beach" : {},
         "minecraft:surface_parameters" : {
            "default_surface" : {
               "mid_material" : "badger:block_sand",
               "top_material" : "badger:block_sand"
            },
            "foundation_material" : "badger:block_sand",
            "sea_floor_depth" : 7,
            "sea_floor_material" : "badger:block_sand",
            "sea_material" : "badger:block_water"
         },
         "monster" : {},
         "warm" : {}
      },
      "description" : {
         "identifier" : "beach"
      }
   }
}
```

-   `format_version` - This is set to `1.13.0` for all biomes, no other format versions is known
-   `identifier` - This is the identifier for your biome, make sure your filename matches this
-   `minecraft:surface_parameters` is the only required component for your biome to generate, to learn more about it, visit our [biome components page](../world-generation/biomes/biome-components)


# Adding biomes

Biomes are read from JSON files in the biomes subfolders of behavior packs. Loading enforces one biome per file; the file name and the actual biome name must match. Adding a file with a new name to the biome data location will make it available for the game to use, while existing biomes can be overriden via files that match their existing name. Note that if you add a new biome you'll need to write component data that allows it to participate in world generation [see full schematic](../world-generation/biomes/biome-schematic), or else it won't show up in your worlds!
