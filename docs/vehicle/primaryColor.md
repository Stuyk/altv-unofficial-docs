---
title: 'vehicle.primaryColor'
description: 'Used to set or get the primary color of the vehicle.'
prefix: '[Server]'
---

# primaryColor

Used to `set` or `get` the primary color of the vehicle.

Values between `1` and `159`.

Returns a `number`.

### Declaration

```typescript
vehicle.primaryColor: number;
```

### Usage

```js
const currentColor = vehicle.primaryColor;

// OR

vehicle.primaryColor = 100;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('zentorno', 0, 0, 0, 0, 0, 0);
vehicle.primaryColor = 100;
```

_These examples assume you have vehicle created or available on `server-side`_