---
title: Intro to Blocks
nav_order: 1
---

# Intro to Blocks

Minecraft Legends allows us to add custom blocks into the game. This tutorial will cover how to create some simple blocks.

## Block Behavior File

Block behaviors are structured to contain a description and a list of components that defines the block's behavior.

`BP/blocks/custom_block.json`

```json
{
    "format_version": "1.8.0",
    "minecraft:block": {
        "description": {
            "identifier": "wiki:custom_block",
            "material": "badger_stone"
        },
        "components": {
            "minecraft:block_shape": {
                "shape": "cube"
            },
            "minecraft:destroy_time": {
                "value": 10
            },
            "badger:terrain_type": {
                "terrain": "stone"
            }
        }
    }
}
```

You can learn more about block components [here](../blocks/block-components).

In this tutorial, we will create four blocks:

-   Filename: custom_block.json; Identifier: wiki:custom_block
-   Filename: custom_log.json; Identifier: wiki:custom_log
-   Filename: custom_side.json; Identifier: wiki:custom_side
-   Filename: custom_shape.json; Identifier: wiki:custom_shape

You can play around with changing the component values for each of these. Let's now define the blocks's visuals.

## Block Visuals

Blocks use a separate file to define its texture in the 'RP/blocks' folder.

`RP/blocks/custom_log.json`

```json
{
    "format_version": "1.15.0",
    "badger:client_block": {
        "wiki:custom_log": {
            "textures": {
                "up": "textures/blocks/your_custom_texture",
                "down": "textures/blocks/your_custom_texture",
                "side": "textures/blocks/your_custom_texture"
            }
        }
    }
}
```

-   `badger:client_block` is the component that tells the game this is a client file for the block.
-   `textures` can be a string or an object with the `up`, `down`, and `side` children.

With the knowledge, create the same files for the other 3 files.

### Block Shape

Block shapes are defined in the `BP` file instead of the `RP` file instead. In the `custom_shape.json` file, change the `shape` key from `cube` to `sheet`.

## Validating Your Blocks

Now that we have our block files created, we need to check if we did it right. Unlike Minecraft, we can't simply place the block in the world.

To test our blocks, we will replace the grass with our custom blocks. Create a `grasslands.biome.json` file in the `BP/biomes` folder.

```json
{
    "format_version": "1.13.0",
    "minecraft:biome": {
        "components": {
            "minecraft:surface_parameters": {
                "default_surface": {
                    "mid_material": "badger:block_dirt",
                    "top_material": "wiki:custom_block" // Replace this with the custom block
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
