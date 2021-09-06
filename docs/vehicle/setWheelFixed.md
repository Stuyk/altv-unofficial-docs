---
title: 'vehicle.setWheelFixed'
description: 'Used to set completely fixes wheel state for an axle.'
prefix: '[Server]'
---

# setWheelFixed

Used to `set` completely fixes wheel state for an axle.

### Declaration

```typescript
vehicle.setWheelFixed(wheel: number): void;
```

### Usage

```js
vehicle.setWheelFixed(0);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('dloader', 0, 0, 0, 0, 0, 0);
vehicle.setWheelFixed(0);
```

_These examples assume you have vehicle created or available on `server-side`_