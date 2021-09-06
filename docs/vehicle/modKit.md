---
title: 'vehicle.modKit'
description: 'Used to set or get the modKit that is applied to the vehicle.'
prefix: '[Server]'
---

# modKit

Used to `set` or `get` the modKit that is applied to the vehicle.

Not all vehicles have modKits but you can use `vehicle.modKitsCount` to determine how many modKits are available for a vehicle. Each modKit has unique parts that go along with that specific modKit.

Returns a `number`.

### Declaration

```typescript
vehicle.modKit: number;
```

### Usage

```js
const currentKit = vehicle.modKit;

// OR

vehicle.modKit = 1;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);

if (vehicle.modKitsCount >= 1) {
    vehicle.modKit = 1;
}
```

_These examples assume you have vehicle created or available on `server-side`_