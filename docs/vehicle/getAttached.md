---
title: 'vehicle.getAttached'
description: 'Used to get whether or not a trailer is attached to a vehicle.'
prefix: '[Server]'
---

# getAttached

Used to `get` whether or not a trailer is attached to a vehicle.

Returns a `Vehicle | null`.

### Declaration

```typescript
vehicle.getAttached(): Vehicle | null;
```

### Usage

```js
const attachedVehicle = vehicle.getAttached();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('phantom', 0, 0, 0, 0, 0, 0);
const trailer = new alt.Vehicle('trailerlogs', 0, 0, 0, 0, 0, 0);


// Hook up the vehicle to the trailer then call this function...
const attachedVehicle = vehicle.getAttached();
if (attachedVehicle && attachedVehicle.valid) {
    console.log(`Trailer is attached!`);
}
```

_These examples assume you have imported `alt` from `alt-server`._