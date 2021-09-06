---
title: 'vehicle.destroy'
description: 'Used to destroy a vehicle from existence.'
prefix: '[Server]'
---

# destroy

Used to destroy a vehicle from existence.

### Declaration

```typescript
vehicle.destroy(): void;
```

### Usage

```js
vehicle.destroy();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);

if (vehicle && vehicle.destroy) {
    vehicle.destroy();
}
```

_These examples assume you have vehicle created or available on `server-side`_