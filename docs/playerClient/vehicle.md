---
title: 'player.vehicle'
description: 'Get the current vehicle if the player is in if they are in one.'
prefix: '[Client]'
---

# alt.Player.local.vehicle

Get the player's current vehicle.

**Syntax**

```js
readonly vehicle: Vehicle | null;
```

### Real World Example

```js
const vehicle = alt.Player.local.vehicle;

if (!vehicle) {
    console.log('YOU ARE NOT IN A VEHICLE');
    return;
}
```

_alt.Player.local can also be a **player instance** from server_
