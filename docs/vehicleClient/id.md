---
title: 'vehicle.id'
description: 'Used to get the current vehicle's server-side id which corresponds on client-side.'
prefix: '[Client]'
---

# id

Used to `get` the current vehicle's server-side id which corresponds on client-side.

Returns a `number`.

### Declaration

```typescript
vehicle.id: number
```

### Usage

```js
const currentID = vehicle.id;
```

### Real World Example

```js
// Check if the local player is in a vehicle.
if (alt.Player.local.vehicle) {
    console.log(`ID is: ${alt.Player.local.vehicle.id}`);
}
```

_These examples assume you have a vehicle available on `client-side`._