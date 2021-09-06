---
title: 'vehicle.pos'
description: 'Used to set or get a vehicle position.'
prefix: '[Server]'
---

# pos

Used to `set` or `get` a vehicle position.

Returns a `{ x: number, y: number, z: number }`.

### Declaration

```typescript
vehicle.pos: { x: number, y: number, z: number };
```

### Usage

```js
const pos = vehicle.pos;

// OR

vehicle.pos = { x: 0, y: 0, z: 0 };
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.pos = { x: 0, y: 0, z: 0 };
```

_These examples assume you have vehicle created or available on `server-side`_