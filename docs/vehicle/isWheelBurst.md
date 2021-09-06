---
title: 'vehicle.isWheelBurst'
description: 'Used to get if a wheel on a vehicle has burst or is flat.'
prefix: '[Server]'
---

# isWheelBurst

Used to `get` if a wheel on a vehicle has burst or is flat.


Returns a `boolean`.

### Declaration

```typescript
vehicle.isWheelBurst(wheel: number): boolean;
```

### Usage

```js
const isWheelFlat = vehicle.isWheelBurst();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('riot', 0, 0, 0, 0, 0, 0);
const isWheelFlat = vehicle.isWheelBurst(2);
```

_These examples assume you have vehicle created or available on `server-side`_