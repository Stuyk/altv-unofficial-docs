---
title: 'vehicle.livery'
description: 'Used to set or get the livery on a vehicle that has liveries.'
prefix: '[Server]'
---

# livery

Used to `set` or `get`  the livery on a vehicle that has liveries.

Returns a `number`.

### Declaration

```typescript
vehicle.livery: number;
```

### Usage

```js
const currentMultiplier = vehicle.livery;

// OR

vehicle.livery = 20;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('sanchez', 0, 0, 0, 0, 0, 0);
vehicle.livery = 1;
```

### Visual

![](https://i.imgur.com/t3Ksw0x.png)

_These examples assume you have vehicle created or available on `server-side`_