---
title: 'vehicle.setWheelHealth'
description: 'Used to set the health of a wheel.'
prefix: '[Server]'
---

# setWheelHealth

Used to `set` the health of a wheel.

### Declaration

```typescript
vehicle.setWheelHealth(wheel: number, health: number): void;
```

### Usage

```js
vehicle.setWheelHealth(0, 100);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('dloader', 0, 0, 0, 0, 0, 0);
vehicle.setWheelHealth(0, 100);
```

_These examples assume you have vehicle created or available on `server-side`_