---
title: 'vehicle.isWheelDetached'
description: 'Used to get if a wheel is no longer attached to the vehicle.'
prefix: '[Server]'
---

# isWheelDetached

Used to `get` if a wheel is no longer attached to the vehicle.


Returns a `boolean`.

### Declaration

```typescript
vehicle.isWheelDetached(wheel: number): boolean;
```

### Usage

```js
const isDetached = vehicle.isWheelDetached();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('riot', 0, 0, 0, 0, 0, 0);
const isDetached = vehicle.isWheelDetached(2);
```

_These examples assume you have vehicle created or available on `server-side`_