---
title: 'vehicle.speedVector'
description: 'Used to get the current vehicle speed based on direction.'
prefix: '[Client]'
---

# speedVector

Used to `get` the current vehicle speed based on direction.

Returns a `{ x: number, y: number, z: number }`.

### Declaration

```typescript
vehicle.speedVector: { x: number, y: number, z: number }
```

### Usage

```js
const currentSpeedVector = vehicle.speedVector;
```

### Real World Example

```js
// Check if the local player is in a vehicle.
if (alt.Player.local.vehicle) {
    console.log(`speedVector is: ${alt.Player.local.vehicle.speedVector}`);
}
```

_These examples assume you have a vehicle available on `client-side`._