---
title: 'vehicle.wheelsType'
description: 'Used to get the total wheel types for this vehicle.'
prefix: '[Server]'
---

# wheelsType

Used to `get` the total wheel types for this vehicle.

Returns a `number`.

### Declaration

```typescript
vehicle.wheelsType: number;
```

### Usage

```js
const typeCount = vehicle.wheelsType;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('police', 0, 0, 0, 0, 0, 0);
const typeCount = vehicle.wheelsType;
```

_These examples assume you have vehicle created or available on `server-side`_