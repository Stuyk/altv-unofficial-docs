---
title: 'vehicle.scriptID'
description: 'Used to get the current vehicle's native handle to apply natives to the vehicle.'
prefix: '[Client]'
---

# scriptID

Used to `get` the current vehicle's native handle to apply natives to the vehicle.

Returns a `number`.

### Declaration

```typescript
vehicle.scriptID: number
```

### Usage

```js
const currentID = vehicle.scriptID;
```

### Real World Example

```js
// Check if the local player is in a vehicle.
if (alt.Player.local.vehicle) {
    console.log(`Script ID is: ${alt.Player.local.vehicle.scriptID}`);
    native.setVehicleEngineOn(alt.Player.local.vehicle.scriptID, true, false, false);
}
```

_These examples assume you have a vehicle available on `client-side`._