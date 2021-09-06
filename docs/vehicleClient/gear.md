---
title: 'vehicle.gear'
description: 'Used to set or get the current vehicle gear.'
prefix: '[Client]'
---

# gear

Used to `set` or `get` the current vehicle gear.

Returns a `number`.

### Declaration

```typescript
vehicle.gear: number
```

### Usage

```js
const currentGear = vehicle.gear;

// OR

vehicle.gear = 2;
```

### Real World Example

```js
// Check if the local player is in a vehicle.
if (alt.Player.local.vehicle) {
    alt.Player.local.vehicle.gear = 2;
}
```

_These examples assume you have a vehicle available on `client-side`._