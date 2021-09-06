---
title: 'alt.setRotationVelocity'
description: 'Sets DLC prop components for a pedestrian.'
prefix: '[Client]'
---

# alt.setRotationVelocity

Sets the rotation velocity of an entity. Entity being a vehicle, player, ped, etc.

### Declaration

```typescript
alt.setRotationVelocity(scriptID: number, x: number, y: number, z: number): void
```

### Usage

```js
alt.setRotationVelocity(alt.Player.local.scriptID, 0, 0, 0);
```

_No good examples of this_

### Real World Example

```js
alt.setRotationVelocity(alt.Player.local.scriptID, 0, 0, 0);
```

_No good examples of this_

_These examples assume you have imported `alt` from `alt-client`._