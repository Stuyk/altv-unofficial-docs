---
title: 'vehicle.tireSmokeColor'
description: 'Used to set or get the tire smoke of a vehicle.'
prefix: '[Server]'
---

# tireSmokeColor

Used to `set` or `get` the tire smoke of a vehicle.

Returns a `{ r: number, g: number, b: number, a: number }`.

### Declaration

```typescript
vehicle.tireSmokeColor: { r: number, g: number, b: number, a: number };
```

### Usage

```js
const smokeColor = vehicle.tireSmokeColor;

// OR

vehicle.tireSmokeColor = { r: 255, g: 0, b: 0, a: 255 };
```

### Real World Example

```js
const vehicle = new alt.Vehicle('police', 0, 0, 0, 0, 0, 0);
vehicle.tireSmokeColor = { r: 255, g: 0, b: 0, a: 255 };
```

_These examples assume you have vehicle created or available on `server-side`_