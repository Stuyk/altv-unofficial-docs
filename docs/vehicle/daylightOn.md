---
title: 'vehicle.daylightOn'
description: 'Used to get the current state of the daylight lights on a vehicle.'
prefix: '[Server]'
---

# daylightOn

Used to `get` the current state of the daylight lights on a vehicle.

Returns a `boolean`.

### Declaration

```typescript
vehicle.daylightOn: boolean
```

### Usage

```js
const daylightOn = vehicle.daylightOn;
```

### Real World Example

```js
function enteredVehicle(player, vehicle, seat) {
    console.log(`Daylights are set to: ${vehicle.daylightOn}`);
}

alt.on('playerEnteredVehicle', enteredVehicle);
```

_These examples assume you have imported `alt` from `alt-server`._