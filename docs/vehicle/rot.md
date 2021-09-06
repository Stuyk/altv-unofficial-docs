---
title: 'vehicle.rot'
description: 'Used to set or get vehicle rotation.'
prefix: '[Server]'
---

# rot

Used to `set` or `get` vehicle rotation.

Returns a `{ x: number, y: number, z: number }`.

### Declaration

```typescript
vehicle.rot: { x: number, y: number, z: number };
```

### Usage

```js
const rot = vehicle.rot;

// OR

vehicle.rot = { x: 0, y: 0, z: 0 };
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.rot = { x: 0, y: 0, z: 0 };
```

_These examples assume you have vehicle created or available on `server-side`_