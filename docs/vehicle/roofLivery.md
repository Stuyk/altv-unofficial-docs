---
title: 'vehicle.roofLivery'
description: 'Used to set or get to apply a roof livery to a vehicle.'
prefix: '[Server]'
---

# roofLivery

Used to `set` or `get` to apply a roof livery to a vehicle.

Returns a `number`.

### Declaration

```typescript
vehicle.roofLivery: number;
```

### Usage

```js
const currentRoofLivery = vehicle.roofLivery;

// OR

vehicle.roofLivery = 2;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.roofLivery = 2;
```

_These examples assume you have vehicle created or available on `server-side`_