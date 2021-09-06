---
title: 'vehicle.bodyAdditionalHealth'
description: 'Used to set or get additional body health on the vehicle'
prefix: '[Server]'
---

# bodyAdditionalHealth

Used to `set` or `get` additional body health on the vehicle.

Returns a `number`.

### Declaration

```typescript
vehicle.bodyAdditionalHealth: number
```

### Usage

```js
const additionalBodyHealth = vehicle.bodyAdditionalHealth;

// OR

vehicle.bodyAdditionalHealth = 255;
```

### Real World Example

Adds additional body health when entering the vehicle.

```js
function enteredVehicle(player, vehicle, seat) {
    vehicle.bodyAdditionalHealth = 255;
    console.log(`Additional Body Health set to ${vehicle.bodyAdditionalHealth}`);
}

alt.on('playerEnteredVehicle', enteredVehicle);
```

_These examples assume you have vehicle created or available on `server-side`_