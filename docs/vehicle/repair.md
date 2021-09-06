---
title: 'vehicle.repair'
description: 'Used to repair a vehicle.'
prefix: '[Server]'
---

# repair

Used to repair a vehicle.

Returns a `boolean`.

### Declaration

```typescript
vehicle.repair(): void;
```

### Usage

```js
vehicle.repair();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('riot', 0, 0, 0, 0, 0, 0);
vehicle.repair();
```

_These examples assume you have vehicle created or available on `server-side`_