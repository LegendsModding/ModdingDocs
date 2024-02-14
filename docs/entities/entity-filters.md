---
title: Entity Filters
---

# Filters

Filters allow data objects to specify test criteria which allows their use.

For example, a model that includes a filter will only be used when the filter criteria is true.

A typical filter consists of four parameters:

name: the name of the test to apply.

domain: the domain the test should be performed in. An armor slot, for example. This parameter is only used by a few tests.

operator: the comparison to apply with the value, such as 'equal' or 'greater'.

value: the value being compared with the test.

A typical filter looks like the following:

{ "test" : "moon_intensity", "subject" : "self", "operator" : "greater", "value" : "0.5" }

Which results in the calling entity (self) calculating the moon_intensity at its location and returning true if the result is greater than 0.5.

Tests can be combined into groups using the collections 'all_of', 'any_of', or 'none_of'.

All tests in an 'all_of' group must pass in order for the group to pass.

One or more tests in an 'any_of' group must pass in order for the group to pass.

All tests in a 'none_of' group must fail in order for the group to pass.

## has_biome_tag

Tests whether the biome the subject is in has the specified tag.

|  Type  |   Name   | Default |                                                                                                                                                                                                                                Description                                                                                                                                                                                                                                 |
| :----: | :------: | :-----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| String | operator | equals  |          (Optional) The comparison to apply with 'value'.<br/><table border="1" style="width:100%; border-style:solid; border-collapse:collapse; border-width:2;"><tr> <th style="border-style:solid; border-width:2;">Options</th> <th style="border-style:solid; border-width:2;">Description</th> </tr><tr><td style="border-style:solid; border-width:2; padding:8px">!=</td><td style="border-style:solid; border-width:2; padding:8px">Test for inequality.          |
| String | subject  |  self   | (Optional) The subject of this filter test.<br/><table border="1" style="width:100%; border-style:solid; border-collapse:collapse; border-width:2;"><tr> <th style="border-style:solid; border-width:2;">Options</th> <th style="border-style:solid; border-width:2;">Description</th> </tr><tr><td style="border-style:solid; border-width:2; padding:8px">block</td><td style="border-style:solid; border-width:2; padding:8px">The block involved with the interaction. |
| String |  value   |         |                                                                                                                                                                                                                       (Required) The tag to look for                                                                                                                                                                                                                       |

### Examples

**Full..**

```
{ "test": "has_biome_tag", "subject": "self", "operator": "equals", "value": " " }
```

**Short (using Defaults)..**

```
{ "test": "has_biome_tag", "value": " " }
```
