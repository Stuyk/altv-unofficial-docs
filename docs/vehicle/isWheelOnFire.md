---
title: 'vehicle.isWheelOnFire'
description: 'Used to get if a wheel has burst into flames.'
prefix: '[Server]'
---

# isWheelOnFire

Used to `get` if a wheel has burst into flames.

Returns a `boolean`.

### Declaration

```typescript
vehicle.isWheelOnFire(wheel: number): boolean;
```

### Usage

```js
const isWheelOnFire = vehicle.isWheelOnFire();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('riot', 0, 0, 0, 0, 0, 0);
const isWheelOnFire = vehicle.isWheelOnFire(2);
```

_These examples assume you have vehicle created or available on `server-side`_