---
title: 'vehicle.repairsCount'
description: 'Used to get the total amount of repairs the vehicle has had.'
prefix: '[Server]'
---

# repairsCount

Used to `get` the total amount of repairs the vehicle has had.

Returns a `number`.

### Declaration

```typescript
vehicle.repairsCount: number;
```

### Usage

```js
const count = vehicle.repairsCount;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
console.log(`Repaired ${vehicle.repairsCount}x Times`);
```

_These examples assume you have vehicle created or available on `server-side`_