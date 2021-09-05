---
title: 'vehicle.bodyHealth'
description: 'Used to set or get body health on the vehicle.'
prefix: '[Server]'
---

# bodyHealth

Used to `set` or `get` body health on the vehicle.

Returns a `number`.

### Declaration

```typescript
vehicle.bodyHealth: number
```

### Usage

```js
const bodyHealth = vehicle.bodyHealth;

// OR

vehicle.bodyHealth = 255;
```

### Real World Example

Set the body health of the vehicle when entering the vehicle.

```js
function enteredVehicle(player, vehicle, seat) {
    vehicle.bodyHealth = 1000;
    console.log(`Body Health set to ${vehicle.bodyHealth}`);
}

alt.on('playerEnteredVehicle', enteredVehicle);
```

_These examples assume you have imported `alt` from `alt-server`._