---
title: 'vehicle.neonColor'
description: 'Used to set or get vehicle neon color.'
prefix: '[Server]'
---

# neonColor

Used to `set` or `get` vehicle neon color.

Returns a `{ r: number, g: number, b: number, a: number }`.

### Declaration

```typescript
vehicle.neonColor: { r: number, g: number, b: number, a: number };
```

### Usage

```js
const currentNeon = vehicle.neonColor;

// OR

vehicle.neonColor = {
    r: 255,
    g: 0,
    b: 0,
    a: 255
};
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