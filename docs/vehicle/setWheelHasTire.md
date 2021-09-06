---
title: 'vehicle.setWheelHasTire'
description: 'Used to set if a wheel should exist in an axle.'
prefix: '[Server]'
---

# setWheelHasTire

Used to `set` if a wheel should exist in an axle.

### Declaration

```typescript
vehicle.setWheelHasTire(wheel: number, isPresent: boolean): void;
```

### Usage

```js
vehicle.setWheelHasTire(0, false);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('dloader', 0, 0, 0, 0, 0, 0);
vehicle.setWheelHasTire(2, true);
```

_These examples assume you have vehicle created or available on `server-side`_