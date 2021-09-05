---
title: 'vehicle.getDoorState'
description: 'Used to get whether or not a door is open for a vehicle.'
prefix: '[Server]'
---

# getDoorState

Used to `get` whether or not a door is open for a vehicle.

**Door Open States**

```js
{
    Closed: 0,
    OpenedLevel1: 1,
    OpenedLevel2: 2,
    OpenedLevel1: 3,
    OpenedLevel2: 4,
    OpenedLevel1: 5,
    OpenedLevel2: 6,
    OpenedLevel1: 7,
    Unknown: 255
}
```

**Vehicle Doors**

```js
{
    DriverFront: 0,
    PassengerFront: 1,
    DriverRear: 2,
    PassengerRear: 3,
    Hood: 4,
    Trunk: 5
}
```

Really you should just check if the doorState is greater than or equal to `1`. That will automatically determine if the doorState is open or not.

Returns a `number`.

### Declaration

```typescript
vehicle.getDoorState(door: number): number;
```

### Usage

```js
const doorState = vehicle.getDoorState(0);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);

// Smash it into some walls before running this.
const doorState = vehicle.getDoorState(0);

if (doorState >= 1) {
    console.log('The vehicle driver door is open');
} else {
    console.log('The vehicle driver door is closed');
}
```

_These examples assume you have imported `alt` from `alt-server`._