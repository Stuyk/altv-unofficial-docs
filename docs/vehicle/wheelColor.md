---
title: 'vehicle.wheelColor'
description: 'Used to set or get the wheel color of a vehicle.'
prefix: '[Server]'
---

# wheelColor

Used to `set` or `get` the wheel color of a vehicle.

Values between `1` and `159`.

Returns a `number`.

### Declaration

```typescript
vehicle.wheelColor: number;
```

### Usage

```js
const tireColor = vehicle.wheelColor;

// OR

vehicle.wheelColor = 136;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('police', 0, 0, 0, 0, 0, 0);
vehicle.wheelColor = 136;
```

_These examples assume you have vehicle created or available on `server-side`_