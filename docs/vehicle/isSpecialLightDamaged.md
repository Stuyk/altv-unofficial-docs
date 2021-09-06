---
title: 'vehicle.isSpecialLightDamaged'
description: 'Used to get if a special light is damaged on a vehicle.'
prefix: '[Server]'
---

# isSpecialLightDamaged

Used to `get` if a speical light on a vehicle is damaged.

No context on what `special` means.

Returns a `boolean`.

### Declaration

```typescript
vehicle.isSpecialLightDamaged(specialLight: number): boolean;
```

### Usage

```js
const isDamaged = vehicle.isSpecialLightDamaged();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('riot', 0, 0, 0, 0, 0, 0);
const isDamaged = vehicle.isSpecialLightDamaged(2);
```

_These examples assume you have vehicle created or available on `server-side`_