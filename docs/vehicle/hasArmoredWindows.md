---
title: 'vehicle.hasArmoredWindows'
description: 'Used to get if the vehicle has armored windows.'
prefix: '[Server]'
---

# hasArmoredWindows()

Used to `get` if the vehicle has armored windows.

Returns a `boolean`.

### Declaration

```typescript
vehicle.hasArmoredWindows: boolean;
```

### Usage

```js
const isArmored = vehicle.hasArmoredWindows;
```

### Real World Example

```js
const vehicle = new alt.Vehicle(`elegy`, 0, 0, 0, 0, 0, 0);
const isArmored = vehicle.hasArmoredWindows;
```

_These examples assume you have vehicle created or available on `server-side`_