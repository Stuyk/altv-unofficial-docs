---
title: 'vehicle.secondaryColor'
description: 'Used to set or get the secondary color of the vehicle.'
prefix: '[Server]'
---

# secondaryColor

Used to `set` or `get` the primary color of the vehicle.

Values between `1` and `159`.

Returns a `number`.

### Declaration

```typescript
vehicle.secondaryColor: number;
```

### Usage

```js
const currentColor = vehicle.secondaryColor;

// OR

vehicle.secondaryColor = 100;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('zentorno', 0, 0, 0, 0, 0, 0);
vehicle.secondaryColor = 100;
```

_These examples assume you have vehicle created or available on `server-side`_