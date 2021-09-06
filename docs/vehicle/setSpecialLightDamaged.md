---
title: 'vehicle.setSpecialLightDamaged'
description: 'Used to set the damage on a special vehicle light.'
prefix: '[Server]'
---

# setSpecialLightDamaged

Used to `set` the damage on a special vehicle light.

### Declaration

```typescript
vehicle.setSpecialLightDamaged(specialLight: number, isDamaged: boolean): void;
```

### Usage

```js
vehicle.setSpecialLightDamaged(0, false);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('dloader', 0, 0, 0, 0, 0, 0);
vehicle.setSpecialLightDamaged(2, false);
```

_These examples assume you have vehicle created or available on `server-side`_