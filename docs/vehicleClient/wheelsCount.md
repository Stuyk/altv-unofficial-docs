---
title: 'vehicle.wheelsCount'
description: 'Used to get the total tires on a vehicle.'
prefix: '[Client]'
---

# wheelsCount

Used to `get` the total tires on a vehicle.

Returns a `number`.

### Declaration

```typescript
vehicle.wheelsCount: number
```

### Usage

```js
const currentWheelsCount = vehicle.wheelsCount;
```

### Real World Example

```js
// Check if the local player is in a vehicle.
if (alt.Player.local.vehicle) {
    console.log(`Wheel Count is: ${alt.Player.local.vehicle.wheelsCount}`);
}
```

_These examples assume you have a vehicle available on `client-side`._