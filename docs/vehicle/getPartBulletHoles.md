---
title: 'vehicle.getPartBulletHoles'
description: 'Used to get number of bullet holes on a vehicle part.'
prefix: '[Server]'
---

# getPartBulletHoles

Used to `get` number of bullet holes on a vehicle part.

```js
{
    FrontLeft: 0,
    FrontRight: 1,
    MiddleLeft: 2,
    MiddleRight: 3,
    RearLeft: 4,
    RearRight: 5,
}
```

Returns a `number`.

### Declaration

```typescript
vehicle.getPartBulletHoles(partId: VehiclePart): number
```

### Usage

```js
const bulletHoles = vehicle.getPartBulletHoles(0);
```

### Real World Example

```js
const vehicle = new alt.Vehicle(`elegy`, 0, 0, 0, 0, 0, 0);
const bulletHoles = vehicle.getPartBulletHoles(0);

console.log(`Elegy has ${bulletHoles} bullet holes.`);
```

_These examples assume you have imported `alt` from `alt-server`._