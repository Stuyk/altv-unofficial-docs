---
title: 'alt.setPedDlcProp'
description: 'Sets DLC prop components for a pedestrian.'
prefix: '[Client]'
---

# alt.setPedDlcProp

Sets DLC props components for a pedestrian. Pedestrian is either an actual player or a NPC. DLC props being a type of prop in a DLC Pack.

```
0 - Hats
1 - Glasses
2 - Ears
6 - Watches
7 - Bracelets
```

### Declaration

```typescript
alt.setPedDlcProp(scriptID: number, dlc: number, component: number, drawable: number, texture: number): void
```

### Usage

```js
alt.setPedDlcProp(alt.Player.local.scriptID, 0, 0, 0, 0);
```

_No good examples of this_

### Real World Example

```js
alt.setPedDlcProp(alt.Player.local.scriptID, 0, 0, 0, 0);
```

_No good examples of this_

_These examples assume you have imported `alt` from `alt-client`._