# Intro to Biomes

Minecraft Legends allows us to create **custom** biomes or **override** vanilla biomes.

## Biome Definitions

Biomes follow the following naming convention for file names, `biome_name.biome.json` inside the `biomes` folder.

-   `biome_name` **MUST** match the identifier for your biome.

A biome file only needs the following for the most basic setup.

```json
{
    "format_version": "1.13.0",
    "minecraft:biome": {
        "components": {
            "minecraft:surface_parameters": {
                "default_surface": {
                    "mid_material": "badger:block_dirt",
                    "top_material": "minecraft:grass"
                },
                "foundation_material": "badger:block_sand",
                "sea_floor_depth": 4,
                "sea_floor_material": "badger:block_sand",
                "sea_material": "badger:block_water"
            }
        },
        "description": {
            "identifier": "grasslands"
        }
    }
}
```

-   `format_version` - This is set to `1.13.0` for all biomes, no other format versions is known
-   `identifier` - This is the identifier for your biome, make sure your filename matches this
-   `minecraft:surface_parameters` is the only required component for your biome to generate, to learn more about it, visit our [biome components page](../world-generation/biome-components)
