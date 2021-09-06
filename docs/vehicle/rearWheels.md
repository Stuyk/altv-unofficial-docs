---
title: 'vehicle.rearWheels'
description: 'Used to get the current rear wheels of a vehicle.'
prefix: '[Server]'
---

# rearWheels

Used to `get` the current rear wheels of a vehicle.

If you want to set vehicle wheels look into [vehicle.setMod](./setMod.md)

Returns a `number`.

### Declaration

```typescript
vehicle.rearWheels: number;
```

### Usage

```js
const rearWheels = vehicle.rearWheels;
```

### Real World Example

No real use case for this unless you need to check if a vehicle mod is set or not.

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
const currentRearWheels = vehicle.rearWheels;
```

_These examples assume you have vehicle created or available on `server-side`_