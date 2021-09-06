---
title: 'alt.Vehicle.all'
description: 'Used to get an array of all vehicles on the server.'
prefix: '[Client]'
---

# alt.Vehicle.all

Used to `get` an array of all vehicles on the server.

When used on `client-side` the vehicles that are not near the player will not have a position. Alternatively use `alt.Vehicle.streamedIn` to get all vehicles that are currently near the local player.

Returns a `Array<alt.Vehicle>`.

### Declaration

```typescript
alt.Vehicle.all: Array<alt.Vehicle>
```

### Usage

```js
const vehicles = alt.Vehicle.all;
```

### Real World Example

Randomizes all vehicle colors on the server.

```js
alt.Vehicle.all.forEach(vehicle => {
    if (!vehicle || !vehicle.valid) {
        return;
    }

    vehicle.primaryColor = Math.floor(Math.random() * 159);
    vehicle.secondaryColor = Math.floor(Math.random() * 159);
});
```

_These examples assume you have vehicle created or available on `client-side`_