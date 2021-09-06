---
title: 'vehicle.isLightDamaged'
description: 'Used to get if a light on a vehicle is damaged.'
prefix: '[Server]'
---

# isLightDamaged

Used to `get` if a light on a vehicle is damaged.

```js
{
    UNKNOWN1: 0,
    UNKNOWN1: 1,
    LIGHT_BACK_LEFT: 2
    LIGHT_BACK_RIGHT: 3,
    LIGHT_LEFT_FRONT: 4,
    LIGHT_RIGHT_FRONT: 5,
}
```

_LF = Left Front,  RF = Right Front, etc._

Returns a `boolean`.

### Declaration

```typescript
vehicle.isLightDamaged(light: number): boolean;
```

### Usage

```js
const isDamaged = vehicle.isLightDamaged();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('riot', 0, 0, 0, 0, 0, 0);
const isDamaged = vehicle.isLightDamaged(2);
```

_These examples assume you have vehicle created or available on `server-side`_