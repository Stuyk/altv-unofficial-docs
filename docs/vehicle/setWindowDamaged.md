---
title: 'vehicle.setWindowDamaged'
description: 'Used to set if a vehicle window should be damaged.'
prefix: '[Server]'
---

# setWindowDamaged

Used to `set` if a vehicle window should be damaged.

**Windows**

```js
{
    VEH_EXT_WINDSCREEN: 0,
    VEH_EXT_WINDSCREEN_R: 1,
    VEH_EXT_WINDOW_LF: 2,
    VEH_EXT_WINDOW_RF: 3,
    VEH_EXT_WINDOW_LR: 4,
    VEH_EXT_WINDOW_RR: 5,
    VEH_EXT_WINDOW_LM: 6,
    VEH_EXT_WINDOW_RM: 7
}
```

### Declaration

```typescript
vehicle.setWindowDamaged(window: number, isDamaged: boolean): void;
```

### Usage

```js
vehicle.setWindowDamaged(0, false);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('dloader', 0, 0, 0, 0, 0, 0);
vehicle.setWindowDamaged(2, true);
```

_These examples assume you have vehicle created or available on `server-side`_