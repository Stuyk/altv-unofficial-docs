---
title: 'vehicle.getHealthDataBase64'
description: 'Used to get the current health state of a vehicle.'
prefix: '[Server]'
---

# getHealthDataBase64

Used to `get` the current health state of a vehicle.

Note that each **GTA:V** update will break this value and potentially crash any player who sees this in their game.

It's highly recommended that if you store this value that you wipe it with each update for alt:V or GTA:V itself.

Returns a `string`.

### Declaration

```typescript
vehicle.getHealthDataBase64(): string;
```

### Usage

```js
const healthState = vehicle.getHealthDataBase64();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);

// Smash it into some walls before running this.
const healthState = vehicle.getHealthDataBase64();
```

_These examples assume you have vehicle created or available on `server-side`_