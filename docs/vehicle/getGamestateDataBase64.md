---
title: 'vehicle.getGamestateDataBase64'
description: 'Used to get the current gamestate of a vehicle.'
prefix: '[Server]'
---

# getGamestateDataBase64

Used to `get` the current gamestate of a vehicle. Saves vehicle door positions, wheels, etc.

Note that each **GTA:V** update will break this value and potentially crash any player who sees this in their game.

It's highly recommended that if you store this value that you wipe it with each update for alt:V or GTA:V itself.

Returns a `string`.

### Declaration

```typescript
vehicle.getGamestateDataBase64(): string;
```

### Usage

```js
const gamestate = vehicle.getGamestateDataBase64();
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);

// Smash it into some walls before running this.
const gamestate = vehicle.getGamestateDataBase64();
```

_These examples assume you have vehicle created or available on `server-side`_