---
title: 'vehicle.isWindowOpened'
description: 'Used to get if a window is currently opened / down.'
prefix: '[Server]'
---

# isWindowOpened

Used to `get` if a window is currently opened / down.

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

Returns a `boolean`.

### Declaration

```typescript
vehicle.isWindowOpened(window: number): boolean;
```

### Usage

```js
const isWindowOpened = vehicle.isWindowOpened();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('riot', 0, 0, 0, 0, 0, 0);
const isWindowOpened = vehicle.isWindowOpened(2);
```

_These examples assume you have vehicle created or available on `server-side`_