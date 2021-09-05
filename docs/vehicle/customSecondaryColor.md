---
title: 'vehicle.customSecondaryColor'
description: 'Placeholder for customSecondaryColor'
prefix: '[Server]'
---

# customSecondaryColor

Used to `set` or `get` the custom primary color of the vehicle.

Returns a `{ r: number, g: number, b: number, a: number }`.

### Declaration

```typescript
vehicle.customSecondaryColor: { r: number, g: number, b: number, a: number }
```

### Usage

```js
const customSecondaryColor = vehicle.customSecondaryColor;

// OR

vehicle.customSecondaryColor = { r: 255, g: 0, b: 0, a: 255 };
```

### Real World Example

Changes the vehicle color each time it is entered.

```js
function randomColor() {
    return Math.floor(Math.random() * 255);
}

function enteredVehicle(player, vehicle, seat) {
    const r = randomColor();
    const g = randomColor();
    const b = randomColor();

    vehicle.customSecondaryColor = { r, g, b, a: 255 };
    console.log(`Vehicle Color Red Value: ${vehicle.customSecondaryColor.r}`);
    console.log(`Vehicle Color Green Value: ${vehicle.customSecondaryColor.g}`);
    console.log(`Vehicle Color Blue Value: ${vehicle.customSecondaryColor.b}`);
}

alt.on('playerEnteredVehicle', enteredVehicle);
```

_These examples assume you have imported `alt` from `alt-server`._