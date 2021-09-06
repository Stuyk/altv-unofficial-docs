---
title: 'vehicle.rpm'
description: 'Used to get the current vehicle revolutions per minute.'
prefix: '[Client]'
---

# rpm

Used to `get` the current vehicle revolutions per minute.

Returns a `number`.

### Declaration

```typescript
vehicle.rpm: number
```

### Usage

```js
const currentRPM = vehicle.rpm;
```

### Real World Example

```js
// Check if the local player is in a vehicle.
if (alt.Player.local.vehicle) {
    console.log(`RPM is: ${alt.Player.local.vehicle.rpm}`);
}
```

_These examples assume you have a vehicle available on `client-side`._