---
title: 'vehicle.engineOn'
description: 'Used to set or get the current engine state'
prefix: '[Server]'
---

# engineOn

Used to `set` or `get` the current engine state.

The functionality of the vehicle engine can be triggered on either client-side or server-side. If you want to trigger the engine on client-side use `native.setVehicleEngineOn`.

Setting the value to `true` will turn the vehicle on.

Returns a `boolean`.

### Declaration

```typescript
vehicle.engineOn: boolean;
```

### Usage

```js
const engineOn = vehicle.engineOn;

// OR

vehicle.engineOn = true;
```

### Real World Example

Set the vehicle engine on when the vehicle is spawned.

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.engineOn = true;
```

_These examples assume you have vehicle created or available on `server-side`_