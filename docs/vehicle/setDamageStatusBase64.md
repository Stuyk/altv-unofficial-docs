---
title: 'vehicle.setDamageStatusBase64'
description: 'Used to apply base64 damage to a vehicle.'
prefix: '[Server]'
---

# setDamageStatusBase64

Used to apply base64 damage to a vehicle.

Note that each **GTA:V** update will break this value and potentially crash any player who sees this in their game.

It's highly recommended that if you store this value that you wipe it with each update for alt:V or GTA:V itself.

### Declaration

```typescript
vehicle.setDamageStatusBase64(data: string): void;
```

### Usage

```js
vehicle.setDamageStatusBase64(someBase64Data);
```

### Real World Example

Cannot post base64 examples but you should use `getDamageStatusBase64` to apply it with this function.

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.setDamageStatusBase64(someBase64Data);
```

_These examples assume you have vehicle created or available on `server-side`_