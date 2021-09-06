---
title: 'vehicle.maxGear'
description: 'Used to set or get the current vehicle maxGear.'
prefix: '[Client]'
---

# maxGear

Used to `set` or `get` the current vehicle maxGear.

Returns a `number`.

### Declaration

```typescript
vehicle.maxGear: number
```

### Usage

```js
const currentMaxGear = vehicle.maxGear;

// OR

vehicle.maxGear = 2;
```

### Real World Example

```js
// Check if the local player is in a vehicle.
if (alt.Player.local.vehicle) {
    console.log(`Max Gear is: ${alt.Player.local.vehicle.maxGear}`);
}
```

_These examples assume you have a vehicle available on `client-side`._