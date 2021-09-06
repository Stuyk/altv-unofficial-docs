---
title: 'vehicle.valid'
description: 'Used to get if the vehicle if currently valid and can be destroyed.'
prefix: '[Server]'
---

# valid

Used to `get` if the vehicle if currently valid and can be destroyed.

Returns a `boolean`.

### Declaration

```typescript
vehicle.valid: boolean;
```

### Usage

```js
const isValid = vehicle.valid;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);

if (vehicle && vehicle.valid) {
    vehicle.destroy();
}
```

_These examples assume you have vehicle created or available on `server-side`_