---
title: Game Configuration
nav_order: 3
---

# Game Configuration

Now that Legends registers your mod, it's time for you to be able to test it.

## Gamelayer

First, create a `gamelayer` folder in the RP folder. Inside `gamelayer`, create a folder called `launcher`. Inside the `launcher` folder, create a file called `game_mode.json`.

![game_mode](/images/game_mode.png)

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

-   Replace the `...` in `behavior_pack` and `resource_pack` with the UUID in the header section of your `manifest.json`.
-   Replace the `...` in `name` with the mod id you defined in `dlc_metadata.json`.

## Game Rules

Now we need to define the game rules for the custom gamemode. Create a `game_rules` folder inside the `RP`. Inside this folder, create a `game_rules.json`.

```json
{
    "badger:template": { "game_mode": "...", "parent": "game_rules" },
    "defaults": {
        "autosaveenabled": true,
        "bsharpenabled": true,
        "campaignactsenabled": false,
        "creativemodedefault": true,
        "devplaygroundenabled": true,
        "difficultymodeenabled": true,
        "dodaylightcycle": false,
        "dofogofwar": false,
        "doplayersinvincible": true,
        "doweathercycle": false,
        "enablecinematicdeaths": false,
        "enableunlocks": true,
        "entitystreamingenabled": true,
        "exclusiveluredunits": true,
        "generator_type": "flat",
        "mapenabled": true,
        "onboardingenabledcampaign": false,
        "onboardingenabledpvp": false,
        "popcapenabled": false,
        "precachestructures": true,
        "randomstartingteam": false,
        "saveonquitenabled": true,
        "skip_lobby_creation": true,
        "teamcolors": false,
        "use_flatlands_level_id": false,
        "useactiontelemetry": false,
        "worldsizeaxischunks": 100
    }
}
```

Replace the `...` with your mod id.

## Player Spawn

The game now knows how to generate your mod, but it needs to know how to spawn the player. In your BP folder, create a `services` folder. In this folder create `player_spawn.json`.

```json
{
    "badger:player_spawn_service": {
        "badger:template": {
            "game_mode": "...",
            "parent": "badger:player_spawn_service"
        },
        "default_mount_archetype": "badger:mount_horse",
        "min_block_radius": 100,
        "pending_villages": [],
        "player_archetype": "minecraft:player",
        "respawn_seconds": 0.0
    }
}
```

Replace the `...` with your mod id.

## Checking your Work

If you have done everything correctly, when you play your mod, it should spawn you in a flat world with the horse mount!
