---
title: 'vehicle.speed'
description: 'Used to get the current vehicle wheel turn speed.'
prefix: '[Client]'
---

# speed

Used to `get` the current vehicle wheel turn speed.

Returns a `number`.

### Declaration

```typescript
vehicle.speed: number
```

### Usage

```js
const currentSpeed = vehicle.speed;
```

### Real World Example

```js
// Check if the local player is in a vehicle.
if (alt.Player.local.vehicle) {
    console.log(`Speed is: ${alt.Player.local.vehicle.speed}`);
}
```

_These examples assume you have a vehicle available on `client-side`._