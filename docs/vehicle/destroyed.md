---
title: 'vehicle.destroyed'
description: 'Used to get the current vehicle destruction state.'
prefix: '[Server]'
---

# destroyed

Used to `get` the current vehicle destruction state.

`true` means the vehicle is destroyed.

Returns a `boolean`.

### Declaration

```typescript
vehicle.destroyed: boolean
```

### Usage

```js
const isDestroyed = vehicle.destroyed;
```

### Real World Example

```js
const someVehicle = alt.Vehicle.all[0];

if (someVehicle.destroyed) {
    console.log(`The vehicle is destroyed`);
}
```

_These examples assume you have imported `alt` from `alt-server`._