---
title: 'vehicle.modKitsCount'
description: 'Used to get the total modKits that can be applied to the vehicle.'
prefix: '[Server]'
---

# modKitsCount

Used to `get` the total modKits that can be applied to the vehicle.

Returns a `number`.

### Declaration

```typescript
vehicle.modKitsCount: number;
```

### Usage

```js
const count = vehicle.modKitsCount;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);

if (vehicle.modKitsCount >= 1) {
    vehicle.modKit = 1;
}
```

_These examples assume you have vehicle created or available on `server-side`_