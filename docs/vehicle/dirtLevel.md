---
title: 'vehicle.dirtLevel'
description: 'Used to set or get the current vehicle's dirt level.'
prefix: '[Server]'
---

# dirtLevel

Used to `set` or `get` the current vehicle's dirt level.

Valid values range from `0.0` to `15.0`.

Returns a `number`.

### Declaration

```typescript
vehicle.dirtLevel: number
```

### Usage

```js
const dirtLevel = vehicle.dirtLevel;

// OR

vehicle.dirtLevel = 15;
```

### Real World Example

Makes the vehicle dirty when it enters the ColShape. Makes the vehicle clean when it leaves. Could do the inverse of this and make a car wash probably.

```js
const dirtColshape = new alt.ColshapeCircle(-1295.9208984375, 86.0835189819336, 2);
dirtColshape.makeDirty = true;

alt.on('entityEnterColshape', (colshape, entity) => {
    // Check if the entity is a vehicle or not.
    if (!(entity instanceof alt.Vehicle)) {
        return;
    }

    // Check if it's the right colshape to do this.
    if (!colshape.makeDirty) {
        return;
    }

    // This is a vehicle.
    entity.dirtLevel = 15;
});

alt.on('entityLeaveColshape', (colshape, entity) => {
    // Check if the entity is a vehicle or not.
    if (!(entity instanceof alt.Vehicle)) {
        return;
    }

    // Check if it's the right colshape to do this.
    if (!colshape.makeDirty) {
        return;
    }

     // This is a vehicle.
     entity.dirtLevel = 0;
});
```

### Visual

**Value of 0**

![](https://i.imgur.com/69A9qUa.png)

**Value of 15**

![](https://i.imgur.com/55HMvym.png)

_These examples assume you have imported `alt` from `alt-server`._