---
title: 'vehicle.getWheelHealth'
description: 'Used to get the wheel health value on a vehicle.'
prefix: '[Server]'
---

# getWheelHealth

Used to `get` the wheel health of a wheel.

Returns a `number`.

### Declaration

```typescript
vehicle.getWheelHealth(wheel: number): number;
```

### Usage

```js
const health = vehicle.getWheelHealth();
```

### Real World Example

```js
const vehicle = new alt.Vehicle(`elegy`, 0, 0, 0, 0, 0, 0);
const health = vehicle.getWheelHealth(0);
```

_These examples assume you have imported `alt` from `alt-server`._