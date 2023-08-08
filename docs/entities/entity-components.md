---
title: Entity Components
---

# Entity Components

Here's a list of all entity components, more documentation coming soon.

-   badger:template
-   badger:objective_health_bar
-   badger:map3_selectable
-   badger:exclude_from_spatial_partition
-   badger:becomes_lost
-   badger:waypoint_marker
-   badger:conflict_config
-   badger:map_controller
-   badger:unittype_selector
-   badger:loot_collector
-   badger:suppress_target_action
-   badger:target_actions
-   badger:global_var_registry_kill
-   badger:recall_prevention
-   badger:bsharp_lifetime
-   badger:aoe
-   badger:resist_status
-   badger:bsharp_interact_cost
-   badger:interactable
-   screen_position_offset
-   badger:map3_tooltip
-   badger:world_single_spawn
-   badger:aimable_turret
-   badger:atomic_village_exempt
-   badger:knockback_resistance
-   badger:status_effect_telemetry_tracking
-   badger:cinematic_death
-   badger:fast_travel
-   badger:inventory
-   badger:difficulty_modifier_gravity
-   badger:movement
-   badger:conflict_coordinator
-   badger:interacts_with_blocks
-   badger:damage_source_telemetry_tracker
-   badger:difficulty_modifier_jump_gravity
-   badger:buildable_intangible
-   badger:telemetry_track_banner_order
-   badger:show_debug_health
-   badger:map3_tooltip_extended
-   capped_spawner
-   badger:jump
-   badger:spawn_costs
-   badger:pop_capped
-   badger:disbandable
-   badger:quick_direct_aim
-   badger:leash_on_stop
-   badger:physics
-   badger:dynamic_scale_interpolate
-   badger:buildable_controller_spawner
-   badger:difficulty_modifier_damage
-   badger:removal_time
-   badger:scriptable_buildable_spawner
-   badger:fast_travel_point
-   badger:player
-   badger:allay
-   badger:entity_leap
-   badger:tags
-   badger:map3_tooltip_action
-   badger:difficulty_modifier_max_health
-   badger:buildable_creation_influence_source
-   badger:offline_traits
-   badger:glide_telemetry_tracking
-   badger:fast_traveller
-   badger:map_icon_revealed
-   badger:clear_from_zone_of_control
-   badger:reset_heartbeat_in_range
-   badger:lure
-   badger:glide
-   badger:bsharp_teleport_presentation
-   badger:stamina
-   badger:difficulty_modifier_knockback
-   badger:damage_influence_source
-   badger:projectile
-   badger:movement_speed_camera_effects
-   badger:buildable_spawner
-   badger:advanced_direct_reticle
-   badger:village_influence
-   badger:destroy_on_village_destruction
-   badger:item_collection
-   badger:action_tickets
-   badger:tag_modifier_source
-   badger:map3_tooltip_audio
-   badger:spawner_add_loot_override
-   badger:damage_receiver
-   badger:auto_fire
-   badger:mount
-   badger:aimable
-   badger:rider
-   badger:entity_age
-   badger:presentation_event
-   badger:world_collision
-   badger:recallable_entity
-   badger:targeting
-   badger:influencer_coordinator
-   badger:map3_solo_play_hidden
-   badger:culture
-   badger:telemetry_lure_direct
-   badger:difficulty_modifier_accuracy_max_range
-   badger:has_saddle
-   badger:buildable_requirement
-   badger:leash
-   badger:telemetry_category
-   badger:difficulty_modifier_accuracy_min_range
-   badger:engineer
-   badger:delayed_jump
-   badger:influence_map_ai
-   badger:health_regeneration
-   badger:trigger_criteria
-   badger:music_emitter_states
-   badger:spawn_tracking
-   badger:sprint
-   badger:aura_applicator
-   badger:conditionally_solid_blocks
-   badger:spawner_add_tags
-   badger:auto_despawn
-   badger:spawner_rules
-   badger:fall_damage
-   badger:reports_hit_reaction
-   badger:damage_receiver_material
-   badger:entity_collision
-   badger:pop_cap_anchor
-   badger:target_assigner
-   badger:track_influenced_group_position
-   badger:health
-   badger:persistent_entity_influence_source
-   badger:state_reporting
-   badger:waypoint_marker_visibility
-   badger:interactor
-   badger:collision_weight
-   badger:loot
-   badger:wander
-   badger:navigation
-   badger:heartbeat
-   badger:projectile_physics
-   badger:aabb
-   badger:auto_teleport
-   badger:lured
-   badger:tracks_health_change
-   badger:campaign_team

## **Desciption**

-   `identifer` Is used to identifie the entity in other files and is normally the entity's name or id and should be unique, if you use identifier of another entite it will overwrite it. **[required]**
-   `runtime_identfier` Is normally set to `Badger:badger_mob`. **[required]**
-   `is_summonable` It determines if the entite is summonable. **[required]**

#### v example v

```json
"description": {
      "identifier": "badger:mob_name",
      "runtime_identifier": "badger:badger_mob",
      "is_summonable": true //bolen
    },
```

## **Mushroom data**

-   `role` Determines the role of the entity. (Can be Animal, Melee, Special, Ranged, other)
-   `function` Determines the function of the entity. (Can Be PvP, other)

#### v example v

```json
"mushroom_data": {
      "role": "Ranged",
      "function": "PvP"
    },
```

## **Template**

-   The `badger:template` component is used to make an entity have all the same components of another entity without the need to rewrite them,
    It is also a array so you can add multiple templates at the same time but they might conflict with etch other, Any of the components that are add by the template will be overridden by ones in the file.

#### v example v

```json
"badger:template": [
        "badger:mob_skeleton"
      ],
```

## **Loot**

-   `table` Determines which loot talbe is droped when the entity is destroyed/killed.

#### v example v

```json
"badger:loot": {
        "table": "uncommon_mob"
      },
```

## **Spawn cost**

-   `costs` Is the cost of spawning the entity although it is largy irrelevant due to that normally being decided by the spawer it self.
-   `tickets` Is the number of soul flames cupped/taken by the entity if any.

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

-   `move_speed` It is the speed at which the entity can move.
-   `air_control_factor` it is how easy it is for the entity to turn around in the air.

#### v example v

```json
"badger:movement": {
        "move_speed": 4.5,
        "air_control_factor": 0.5
      },
```

## Physics

-   `gravity` It is how strong is how much the force of gravity affects the entity - is more + is less.
-   `friction` It is how much the entity is slowed down by touching the ground.

#### v example v

```json
"badger:physics": {
        "gravity": -30,
        "friction": 0.04
      },
```
