---
title: 'vehicle.valid'
description: 'Used to get if the vehicle if currently valid and can be destroyed.'
prefix: '[Client]'
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
if (alt.Player.local.vehicle && alt.Player.local.vehicle.valid) {
    console.log('do something with the valid vehicle');
}
```

_These examples assume you have vehicle created or available on `server-side`_