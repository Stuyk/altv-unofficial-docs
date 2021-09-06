---
title: 'alt.Vehicle.streamedIn'
description: 'Used to get an array of all vehicles near the player that are in their streaming range.'
prefix: '[Client]'
---

# alt.Vehicle.streamedIn

Used to `get` an array of all vehicles near the player that are in their streaming range.

Returns a `Array<alt.Vehicle>`.

### Declaration

```typescript
alt.Vehicle.streamedIn: Array<alt.Vehicle>
```

### Usage

```js
const vehicles = alt.Vehicle.streamedIn;
```

### Real World Example

Randomizes all vehicle colors on the server.

```js
alt.Vehicle.streamedIn.forEach(vehicle => {
    if (!vehicle || !vehicle.valid) {
        return;
    }

    console.log(`Vehicle ID is: ${vehicle.id}`);
});
```

_These examples assume you have vehicle created or available on `server-side`_