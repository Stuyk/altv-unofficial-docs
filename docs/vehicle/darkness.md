---
title: 'vehicle.darkness'
description: 'Used to set or get the darkness of the metal on a vehicle. Best seen on a hydra plane.'
prefix: '[Server]'
---

# darkness

Used to `set` or `get` the darkness of the metal on a vehicle. Best seen on a `hydra` plane.

Returns a `number`.

### Declaration

```typescript
vehicle.darkness: number
```

### Usage

```js
const darkness = vehicle.darkness;

// OR

vehicle.darkness = 500;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('hydra', 0, 0, 0, 0, 0, 0);
vehicle.darkness = 500;
```

### Visual

**0 Darkness**

![](https://i.imgur.com/6Pgq0Rn.png)

**500 Darkness**

![](https://i.imgur.com/xCnlnco.png)


_These examples assume you have vehicle created or available on `server-side`_