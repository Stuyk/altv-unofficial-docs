---
title: 'vehicle.customTires'
description: 'Used to set or get if custom tires are currently in use.'
prefix: '[Server]'
---

# customTires

Used to `set` or `get` if custom tires are currently in use.

Useful when customizing different tire related effects like tire smoke.

Returns a `boolean`.

### Declaration

```typescript
vehicle.customTires: boolean
```

### Usage

```js
const customTires = vehicle.customTires;

// OR

vehicle.customTires = true;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('infernus', 0, 0, 0, 0, 0, 0);
vehicle.customTires = 1;

// 0 means there are no mods.
// Modkit implies a group of mods available for a vehicle.
if (vehicle.modKitsCount >= 1) {
    vehicle.modKit = 1;
}
```

_These examples assume you have vehicle created or available on `server-side`_