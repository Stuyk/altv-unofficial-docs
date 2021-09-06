---
title: 'vehicle.setWheels'
description: 'Used to set the wheels of a vehicle. Applies to vehicles and motorcycles.'
prefix: '[Server]'
---

# setWheels

Used to `set` the wheels of a vehicle. Applies to vehicles and motorcycles.

### Declaration

```typescript
vehicle.setWheels(wheelType: number, wheelID: number): void;
```

### Usage

```js
vehicle.setWheels(0, 25);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('dloader', 0, 0, 0, 0, 0, 0);
vehicle.setWheels(0, 25);
```

_These examples assume you have vehicle created or available on `server-side`_