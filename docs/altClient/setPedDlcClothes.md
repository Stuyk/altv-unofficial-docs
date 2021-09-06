---
title: 'alt.setPedDlcClothes'
description: 'Sets DLC clothing components for a pedestrian.'
prefix: '[Client]'
---

# alt.setPedDlcClothes

Sets DLC clothing components for a pedestrian. Pedestrian is either an actual player or a NPC. DLC clothes being a type of clothing in a DLC Pack.

**Component IDs**

```
0 - Head
1 - Mask
2 - Hair Stye
3 - Torso
4 - Legs
5 - Bags
6 - Shoes
7 - Accessories
8 - Undershirts
9 - Body Armour
10 - Decals
11 - Tops
```

### Declaration

```typescript
alt.setPedDlcClothes(scriptID: number, dlc: number, component: number, drawable: number, texture: number, palette?: number): void
```

### Usage

```js
alt.setPedDlcClothes(alt.Player.local.scriptID, 0, 0, 0, 0, 0);
```

_No good examples of this_

### Real World Example

```js
alt.setPedDlcClothes(alt.Player.local.scriptID, 0, 0, 0, 0, 0);
```

_No good examples of this_

_These examples assume you have imported `alt` from `alt-client`._