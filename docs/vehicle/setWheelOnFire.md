---
title: 'vehicle.setWheelOnFire'
description: 'Used to set if a wheel is on fire or not.'
prefix: '[Server]'
---

# setWheelOnFire

Used to `set` if a wheel is on fire or not.

### Declaration

```typescript
vehicle.setWheelOnFire(wheel: number, isOnFire: boolean): void;
```

### Usage

```js
vehicle.setWheelOnFire(0, false);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('dloader', 0, 0, 0, 0, 0, 0);
vehicle.setWheelOnFire(0, true);
```

_These examples assume you have vehicle created or available on `server-side`_