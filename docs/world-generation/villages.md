---
hidden: true
---

# Things to know

When reading this you are expected to haver read the https://legendsmodding.github.io/ModdingDocs/world-generation/world-generation-intro.html
and have everything in the https://legendsmodding.github.io/ModdingDocs/guide/game-config.html set up and working.

# Adding piglin bases

In this part of the wiki, we will be talking about how to make piglin bases generate automatically like in the versus game mode.
If you are looking into how to add piglin bases like in campain, That will be added to the wiki in the future and for any help ask in the `MCL` moding discord.

## Steps

-   Adding `conquest` game mode as a `parent game mode` in the `game_mode.json` file
-   Adding the `outpost_slot` to the `placement.json` file.
-   Adding the biome to the `world_definition` file.

### 1- Adding `conquest` game mode as a `parent game mode` in the `game_mode.json` file

Open your `game_mode.json` file that could be found in `RP\gamelayer\launcher\game_mode.json`.
It should aready look something like this.

```json
{
    "game_modes": [
        {
            "behavior_pack": "...",
            "default_privacy": 0,
            "loading_tip_set": "campaign",
            "max_players": 1,
            "name": "...",
            "parent": "myth",
            "resource_pack": "...",
            "telemetry_name": "Myth_Mod_Template",
            "ui_style": "lostLegend"
        }
    ],
    "myths_hub_host_list": [{ "name": "myth_test" }]
}
```

You wanna add `"parent": "conquest",` were you can see downblow

```json
{
    "game_modes": [
        {
            "behavior_pack": "...",
            "default_privacy": 0,
            "loading_tip_set": "campaign",
            "max_players": 1,
            "name": "...",
            "parent": "myth",
----------->"parent": "conquest",
            "resource_pack": "...",
            "telemetry_name": "Myth_Mod_Template",
            "ui_style": "lostLegend"
        }
    ],
    "myths_hub_host_list": [{ "name": "myth_test" }]
}
```

### 2- Adding the `outpost_slot` to the `placement.json` file

You need to add this card to your placement.json file

```json
{
    "unique_card_id": "pvp_outpost_slot_outpost_slot",
    "map_data": "badger:piglin_pvp_faction",
    "village_data": "",
    "placement_name": "outpost_slot",
    "placement_type": "slot",
    "initial_villages": {
        "small": {
            "count": 0
        }
    },
    "jitter": 0,
    "biome": {
        "biome": "grasslands",
        "total_pixels": 2,
        "starting_pixels": 1
    },
    "tags": ["outpost_slot"],
    "placement_rules": [
        {
            "distance": {
                "chunk_distance_from_parent": [16, 32],
                "distance_to_zero_score": 1,
                "tag_parent": "blue_hq",
                "weight": 10
            }
        },
        {
            "distance": {
                "chunk_distance_from_parent": [16, 32],
                "distance_to_zero_score": 1,
                "tag_parent": "red_hq",
                "weight": 10
            }
        },
        {
            "distance": {
                "chunk_distance_from_parent": [16, 32],
                "distance_to_zero_score": 1,
                "tag_parent": "slot",
                "weight": 5
            }
        }
    ]
}
```

#### Information about code

-   Placement rules.
    -   This makes sure that the bases are spread out.
    ```json
    {
            "distance": {
              "chunk_distance_from_parent": [
                16,
                32
              ],
              "distance_to_zero_score": 1,
              "tag_parent": "slot",
              "weight": 5
            }
          },
    ```
    -   This makes sure that the base is far from the player bases and not in them or colliding with it.
    ```json
    {
            "distance": {
              "chunk_distance_from_parent": [
                16,
                32
              ],
              "distance_to_zero_score": 1,
              "tag_parent": "blue_hq",
              "weight": 10
            }
          },
    ```
    ```json
          {
            "distance": {
              "chunk_distance_from_parent": [
                16,
                32
              ],
              "distance_to_zero_score": 1,
              "tag_parent": "red_hq",
              "weight": 10
            }
          },
    ```

### 3- Adding the biome to the `world_definition` file

Add this in your `const WorldGenDefinition = { modify:(filterManager) => {}` function, In the `BP\game_modes\behavior_packs\pvp\scripts_bsharp20\world\world_gen_definition.js` file.

```js
PiglinPVPData.numOutposts = 1; //the number of piglin bases you want to spawn
filterManager.AppendFilter(['outpost_slot'], PiglinPVPData.numOutposts);
```

# Extra

-   This is for people who wanna add extra functionality to there mods.

## Making it so the number of piglin bases corresponds with the number of biomes

In your `const WorldGenDefinition = { modify:(filterManager) => {}` function, In the BP\game_modes\behavior_packs\pvp\scripts_bsharp20\world\world_gen_definition.js` file.|
Replace

```js
PiglinPVPData.numOutposts = 1; //the number of piglin bases you want to spawn
filterManager.AppendFilter(['outpost_slot'], PiglinPVPData.numOutposts);
```

with

```
const numBiomes = filterManager.GetFilterCount(["biome"])
        if (numBiomes <= 5) {
            PiglinPVPData.numOutposts = 1
        } else if (numBiomes <= 9) {
            PiglinPVPData.numOutposts = 2
        } else {
            PiglinPVPData.numOutposts = 3
        }
        filterManager.AppendFilter(["outpost_slot"], PiglinPVPData.numOutposts)
```

#### Information about code

You can replace the `filterManger.GetFilterCount(["biome"])` with anything you want like maybe number of players or something else
