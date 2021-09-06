---
title: 'vehicle.pearlColor'
description: 'Used to set or get the current pearl color on the vehicle.'
prefix: '[Server]'
---

# pearlColor

Used to `set` or `get` the current pearl color on the vehicle.

Pearl color is an underlying color that is applied to the vehicle when the camera is moved around. Pearl color does not work with **CUSTOM COLORS** you must use `vehicle.primaryColor` and `vehicle.secondaryColor` to apply a `pearlColor`.

Valid values range from `0` to `159`.

Returns a `number`.

### Declaration

```typescript
vehicle.pearlColor: number;
```

### Usage

```js
const currentPaintType = vehicle.pearlColor;

// OR

vehicle.pearlColor = 136;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('zentorno', 0, 0, 0, 0, 0, 0);
vehicle.PrimaryColor = 5;
vehicle.SecondaryColor = 5;
vehicle.pearlColor = 27;
```

### Visual

![](https://i.imgur.com/BfjODPg.png)

_These examples assume you have vehicle created or available on `server-side`_