---
title: 'vehicle.setDoorState'
description: 'Used to get whether or not a door is open for a vehicle.'
prefix: '[Server]'
---

# setDoorState

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

### Declaration

```typescript
vehicle.setDoorState(door: number): void;
```

### Usage

```js
vehicle.setDoorState(0, 0);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);

// Should close the door for driver.
vehicle.setDoorState(0, 0);
```

_These examples assume you have vehicle created or available on `server-side`_