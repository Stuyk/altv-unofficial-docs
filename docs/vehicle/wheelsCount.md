---
title: 'vehicle.wheelsCount'
description: 'Used to get the total wheels for this vehicle.'
prefix: '[Server]'
---

# wheelsCount

Used to `get` the total wheels for this vehicle.

Returns a `number`.

### Declaration

```typescript
vehicle.wheelsCount: number;
```

### Usage

```js
const count = vehicle.wheelsCount;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('police', 0, 0, 0, 0, 0, 0);
const count = vehicle.wheelsCount;
```

_These examples assume you have vehicle created or available on `server-side`_