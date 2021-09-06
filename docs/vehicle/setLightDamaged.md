---
title: 'vehicle.setLightDamaged'
description: 'Used to set the damage on a vehicle light.'
prefix: '[Server]'
---

# setLightDamaged

Used to `set` the damage on a vehicle light.


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

### Declaration

```typescript
vehicle.setLightDamaged(light: number, isDamaged: boolean): void;
```

### Usage

```js
vehicle.setLightDamaged(0, false);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('dloader', 0, 0, 0, 0, 0, 0);
vehicle.setLightDamaged(2, false);
```

_These examples assume you have vehicle created or available on `server-side`_