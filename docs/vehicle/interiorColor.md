---
title: 'vehicle.interiorColor'
description: 'Used to set or get the color of the interior in a vehicle.'
prefix: '[Server]'
---

# interiorColor

Used to `set` or `get` the color of the interior in a vehicle.

Valid values range from `0` to `159`.

Returns a `number`.

### Declaration

```typescript
vehicle.interiorColor: number
```

### Usage

```js
const interiorColor = vehicle.interiorColor;

// OR

vehicle.interiorColor = 9;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.modKit = 1;
vehicle.interiorColor = 139;
```

### Visual

![](https://i.imgur.com/8vO0OXz.png)

_These examples assume you have vehicle created or available on `server-side`_