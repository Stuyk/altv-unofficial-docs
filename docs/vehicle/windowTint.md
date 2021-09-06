---
title: 'vehicle.windowTint'
description: 'Used to set or get the window tint of a vehicle.'
prefix: '[Server]'
---

# windowTint

Used to `set` or `get` the window tint of a vehicle.

**Window Tint**

```js
{
    None: 0,
    PureBlack: 1,
    DarkSmoke: 2,
    LightSmoke: 3,
    Stock: 4,
    Limo: 5,
    Green: 6
}
```

Returns a `number`.

### Declaration

```typescript
vehicle.windowTint: number;
```

### Usage

```js
const windowTint = vehicle.windowTint;

// OR

vehicle.windowTint = 2;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('police', 0, 0, 0, 0, 0, 0);
vehicle.windowTint = 2;
```

_These examples assume you have vehicle created or available on `server-side`_