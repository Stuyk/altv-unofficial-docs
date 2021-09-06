---
title: 'vehicle.driver'
description: 'Used to get the current vehicle driver.'
prefix: '[Server]'
---

# driver

Used to `get` the current vehicle driver.

Returns a `Player | null`.

### Declaration

```typescript
vehicle.driver: alt.Player | null
```

### Usage

```js
const driver = vehicle.driver;
```

### Real World Example

Determine if the player is currently driving a vehicle.

```js
function isPlayerDriving(player) {
    // Not in a vehicle.
    if (!player.vehicle) {
        return false;
    }

    // Vehicle does not have a driver.
    if (!player.vehicle.driver) {
        return false;
    }

    // Driver ID does not match Player ID.
    if (player.vehicle.driver.id !== player.id) {
        return false;
    }

    // Match found and is driving.
    return true;
}

const isDriving = isPlayerDriving(somePlayer);
```

_These examples assume you have vehicle created or available on `server-side`_