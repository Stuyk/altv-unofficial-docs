---
title: 'vehicle.setRearWheels'
description: 'Used to set the rear wheels of a vehicle.'
prefix: '[Server]'
---

# setRearWheels

Used to `set` the rear wheels of a vehicle.

Usually only used with `motorcycles`. Otherwise use `vehicle.setWheels` for regular vehicles.

### Declaration

```typescript
vehicle.setRearWheels(wheelID: number): void
```

### Usage

```js
vehicle.setRearWheels(25);
```

### Real World Example

```js
const vehicle = new alt.Vehicle(`avarus`, 0, 0, 0, 0, 0, 0);
vehicle.setRearWheels(25);
```

_These examples assume you have vehicle created or available on `server-side`_