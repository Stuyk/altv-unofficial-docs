---
title: 'vehicle.getDamageStatusBase64'
description: 'Used to get the current damage of a vehicle.'
prefix: '[Server]'
---

# getDamageStatusBase64

Used to `get` the current damage of a vehicle.

Note that each **GTA:V** update will break this value and potentially crash any player who sees this in their game.

It's highly recommended that if you store this value that you wipe it with each update for alt:V or GTA:V itself.

Returns a `string`.

### Declaration

```typescript
vehicle.getDamageStatusBase64(): string;
```

### Usage

```js
const damage = vehicle.getDamageStatusBase64();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);

// Smash it into some walls before running this.
const damage = vehicle.getDamageStatusBase64();
```

_These examples assume you have imported `alt` from `alt-server`._