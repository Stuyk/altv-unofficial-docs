---
title: 'vehicle.engineHealth'
description: 'Used to set or get the current engine health of the vehicle.'
prefix: '[Server]'
---

# engineHealth

Used to `set` or `get` the current engine health of the vehicle.

Most vehicles have an engine health of `1000`.

You should use `vehicle.repair()` if the vehicle is destroyed or the engine health is less than or equal to `0`.

Returns a `number`.

### Declaration

```typescript
vehicle.engineHealth: number;
```

### Usage

```js
const engineHealth = vehicle.engineHealth;

// OR

vehicle.engineHealth = 1000;
```

### Real World Example

Restore / Repair the vehicle when it enters a ColShape.

```js
const someColShape = new alt.ColshapeCircle(-1295.9208984375, 86.0835189819336, 2);
someColShape.repairVehicles = true;

alt.on('entityEnterColshape', (colshape, entity) => {
    // Check if the entity is a vehicle or not.
    if (!(entity instanceof alt.Vehicle)) {
        return;
    }

    // Check if it's the right colshape to do this.
    if (!colshape.repairVehicles) {
        return;
    }

    if (entity.destroyed) {
        entity.repair();
        console.log('Repaired Destroyed Vehicle');
        return;
    }

    entity.engineHealth = 1000;
    console.log('Repaired Vehicle');
});
```

_These examples assume you have imported `alt` from `alt-server`._