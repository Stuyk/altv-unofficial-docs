---
title: 'vehicle.neon'
description: 'Used to set or get vehicle neon state.'
prefix: '[Server]'
---

# neon

Used to `set` or `get` vehicle neon state.

Returns a `{ left: boolean, right: boolean, front: boolean, back: boolean }`.

### Declaration

```typescript
vehicle.neon: { left: boolean, right: boolean, front: boolean, back: boolean };
```

### Usage

```js
const currentNeon = vehicle.neon;

// OR

vehicle.neon = {
    front: true,
    back: true,
    left: true,
    right: true
}
```

### Real World Example

```js
const vehicle = new alt.Vehicle('sanchez', 0, 0, 0, 0, 0, 0);
vehicle.neon = {
    front: true,
    back: true,
    left: true,
    right: true
};

vehicle.neonColor = {
    r: 255,
    g: 0,
    b: 0,
    a: 255
};
```

### Visual

![](https://i.imgur.com/upZ41MQ.png)

_These examples assume you have vehicle created or available on `server-side`_