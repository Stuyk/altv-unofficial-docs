---
title: 'vehicle.doesWheelHasTire '
description: 'Used to check if a specific vehicle wheel id has a tire or not.'
prefix: '[Server]'
---

# doesWheelHasTire

Used to check if a specified wheel has a tire or not.

Returns a `boolean`.

### Declaration

```typescript
vehicle.doesWheelHasTire(wheelId: number): boolean
```

### Usage

```js
const hasTire = vehicle.doesWheelHasTire;
```

### Real World Example

```js
const someVehicle = alt.Vehicle.all[0];

if (someVehicle.doesWheelHasTire(0)) {
    console.log(`The vehicle at wheel id 0 currently has a tire.`);
} else {
    console.log(`The vehicle at wheel id 0 does not have a tire.`);
}
```

_These examples assume you have imported `alt` from `alt-server`._