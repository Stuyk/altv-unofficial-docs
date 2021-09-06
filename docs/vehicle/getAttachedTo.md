---
title: 'vehicle.getAttachedTo'
description: 'Used to get the vehicle that this vehicle is attached to.'
prefix: '[Server]'
---

# getAttachedTo

Used to `get` the vehicle that this vehicle is attached to.

Returns a `Vehicle | null`.

### Declaration

```typescript
vehicle.getAttachedTo(): Vehicle | null;
```

### Usage

```js
const attachedTo = vehicle.getAttachedTo();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('phantom', 0, 0, 0, 0, 0, 0);
const trailer = new alt.Vehicle('trailerlogs', 0, 0, 0, 0, 0, 0);

// Hook up the vehicle to the trailer then call this function...
const targetVehicle = trailer.getAttachedTo();
if (targetVehicle && targetVehicle.valid) {
    console.log(`Attached to a vehicle.`);
}
```

_These examples assume you have vehicle created or available on `server-side`_