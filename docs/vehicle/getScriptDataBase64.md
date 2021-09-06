---
title: 'vehicle.getScriptDataBase64'
description: 'Used to get the base64 data for the vehicles script functionality.'
prefix: '[Server]'
---

# getScriptDataBase64

Used to `get` the base64 data for the vehicles script functionality.

Note that each **GTA:V** update will break this value and potentially crash any player who sees this in their game.

It's highly recommended that if you store this value that you wipe it with each update for alt:V or GTA:V itself.

Returns a `string`.

### Declaration

```typescript
vehicle.getScriptDataBase64(): string
```

### Usage

```js
const state = vehicle.getScriptDataBase64();
```

### Real World Example

```js
const vehicle = new alt.Vehicle(`elegy`, 0, 0, 0, 0, 0, 0);
const state = vehicle.getScriptDataBase64();
```

_These examples assume you have vehicle created or available on `server-side`_