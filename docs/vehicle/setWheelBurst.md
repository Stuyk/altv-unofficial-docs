---
title: 'vehicle.setWheelBurst'
description: 'Used to set if a wheel is burst or not.'
prefix: '[Server]'
---

# setWheelBurst

Used to `set` if a wheel is burst or not.

### Declaration

```typescript
vehicle.setWheelBurst(wheel: number, isDamaged: boolean): void;
```

### Usage

```js
vehicle.setWheelBurst(0, false);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('dloader', 0, 0, 0, 0, 0, 0);
vehicle.setWheelBurst(2, true);
```

_These examples assume you have vehicle created or available on `server-side`_