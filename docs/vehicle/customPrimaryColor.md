---
title: 'vehicle.customPrimaryColor'
description: 'Used to set or get the custom primary color of the vehicle.'
prefix: '[Server]'
---

# customPrimaryColor

Used to `set` or `get` the custom primary color of the vehicle.

Returns a `{ r: number, g: number, b: number, a: number }`.

### Declaration

```typescript
vehicle.customPrimaryColor: { r: number, g: number, b: number, a: number }
```

### Usage

```js
const customPrimaryColor = vehicle.customPrimaryColor;

// OR

vehicle.customPrimaryColor = { r: 255, g: 0, b: 0, a: 255 };
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

    vehicle.customPrimaryColor = { r, g, b, a: 255 };
    console.log(`Vehicle Color Red Value: ${vehicle.customPrimaryColor.r}`);
    console.log(`Vehicle Color Green Value: ${vehicle.customPrimaryColor.g}`);
    console.log(`Vehicle Color Blue Value: ${vehicle.customPrimaryColor.b}`);
}

alt.on('playerEnteredVehicle', enteredVehicle);
```

_These examples assume you have vehicle created or available on `server-side`_