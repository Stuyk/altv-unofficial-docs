---
title: 'vehicle.frontWheels'
description: 'Used to get the current front wheels of a vehicle.'
prefix: '[Server]'
---

# frontWheels

Used to `get` the current front wheels of a vehicle.

If you want to set vehicle wheels look into [vehicle.setMod](./setMod.md)

Returns a `number`.

### Declaration

```typescript
vehicle.frontWheels: number;
```

### Usage

```js
const frontWheels = vehicle.frontWheels;
```

### Real World Example

No real use case for this unless you need to check if a vehicle mod is set or not.

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
const currentFrontWheels = vehicle.frontWheels;
```

_These examples assume you have vehicle created or available on `server-side`_