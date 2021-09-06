---
title: 'player.vehicle'
description: 'Get the vehicle a player is currently in.'
prefix: '[Server]'
---

# player.vehicle

**Description**

Get the player's current vehicle.

**Syntax**

```js
readonly vehicle: Vehicle | null;
```

### Real World Example

```js
const vehicle = player.vehicle;

if (!vehicle) {
    console.log('THEY ARE NOT IN A VEHICLE');
    return;
}
```
