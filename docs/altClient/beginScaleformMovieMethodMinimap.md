---
title: 'alt.beginScaleformMovieMethodMinimap'
description: 'Executes the specified scaleform method on the minimap.'
prefix: '[Client]'
---

# alt.beginScaleformMovieMethodMinimap

Used to change the various aspects of the Minimap including adding or removing armour bars. However, there is no real concise and clear documentation to really represent when you can do with this function.

It is mentioned that your best option is to look into the minimap scale forms.

Here's a list of names that can help modify the minimap.

```
SET_SATNAV_DIRECTION
SET_SATNAV_DISTANCE
SHOW_SATNAV
HIDE_SATNAV
SHOW_STALL_WARNING
SET_ABILITY_BAR_GLOW
SET_ABILITY_BAR_VISIBILITY_IN_MULTIPLAYER
SHOW_YOKE
SETUP_HEALTH_ARMOUR
SET_PLAYER_HEALTH
SET_PLAYER_ARMOUR
SET_ABILITY_BAR
SET_AIR_BAR
```

Natives that are used after calling this function are:

```
native.scaleformMovieMethodAddParamInt
native.scaleformMovieMethodAddParamFloat
native.scaleformMovieMethodAddParamBool
native.scaleformMovieMethodAddParamTextureNameString
native.scaleformMovieMethodAddParamPlayerNameString
native.scaleformMovieMethodAddParamLatestBriefString
```

### Declaration

```typescript
alt.beginScaleformMovieMethodMinimap(methodName: string): boolean
```

### Usage
```js
alt.beginScaleformMovieMethodMinimap('SETUP_HEALTH_ARMOUR');
```

### Real World Example

This example simply removes armour and health bars from the minimap.

```js
alt.beginScaleformMovieMethodMinimap('SETUP_HEALTH_ARMOUR');
native.addScaleformMovieMethodParameterInt(3);
native.endScaleformMovieMethod();
```

Output when using the change above.

![](https://i.imgur.com/xUrQ18q.png)

_These examples assume you have imported `alt` from `alt-client`._
