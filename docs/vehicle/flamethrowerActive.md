---
title: 'vehicle.flamethrowerActive'
description: 'Used to get the current status of a vehicle with a flamethrower.'
prefix: '[Server]'
---

# flamethrowerActive

Used to `get` the current status of a vehicle with a flamethrower.

Returns a `boolean`.

### Declaration

```typescript
vehicle.flamethrowerActive: boolean;
```

### Usage

```js
const flamethrowerActive = vehicle.flamethrowerActive;

// OR

vehicle.flamethrowerActive = true;
```

### Real World Example

This isn't really a real example since there isn't a lot of cases where you will need to check if the vehicle is currently using the flamethrower.

```js
const vehicle = new alt.Vehicle('cerberus', 0, 0, 0, 0, 0, 0);

// When the flame thrower is active it'll throw a console log.
alt.setInterval(() => {
    if (vehicle.flamethrowerActive) {
        console.log(`Flamethrower was used...`);
    }
}, 1000);

```

_These examples assume you have imported `alt` from `alt-server`._