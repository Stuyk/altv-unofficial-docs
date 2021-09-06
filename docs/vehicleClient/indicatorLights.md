---
title: 'vehicle.gear'
description: 'Used to set or get the vehicle indicator lights.'
prefix: '[Client]'
---

# gear

Used to `set` or `get` the vehicle indicator lights.

**Indicator Lights**

```js
{
    None: 0,
    BlinkLeft: 1,
    BlinkRight: 2,
    BlinkPermBoth: 4,
    StaticBoth: 8,
    Interior: 64,
}
```

Returns a `number`.

### Declaration

```typescript
vehicle.indicatorLights: number
```

### Usage

```js
const currentIndicator = vehicle.indicatorLights;

// OR

vehicle.indicatorLights = 2;
```

### Real World Example

This is a simple turn blinker script. Pretty much turns on indicator lights depending on what arrow key you press while in a vehicle.

```js
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

let turnTimeout;

function handleKeyPress(keyValue) {
    if (!alt.Player.local.vehicle) {
        return;
    }

    if (turnTimeout) {
        alt.clearTimeout(turnTimeout);
        turnTimeout = null;
    }

    if (keyValue === LEFT_ARROW) {
        alt.Player.local.vehicle.indicatorLights = 1;
    }

    if (keyValue === RIGHT_ARROW) {
        alt.Player.local.vehicle.indicatorLights = 2;
    }

    alt.setTimeout(() => {
        if (!alt.Player.local.vehicle) {
            return;
        }

        alt.Player.local.vehicle.indicatorLights = 0;
    }, 5000);
}

alt.on('keyup', handleKeyPress);
```

_These examples assume you have a vehicle available on `client-side`._