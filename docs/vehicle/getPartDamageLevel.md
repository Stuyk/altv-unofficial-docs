---
title: 'vehicle.getPartDamageLevel'
description: 'Used to get number of bullet holes on a vehicle part.'
prefix: '[Server]'
---

# getPartDamageLevel

Used to `get` number of bullet holes on a vehicle part.

**Parts**

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

**Part Damage Types**

```js
{
    NotDamaged: 0,
    DamagedLevel1: 1,
    DamagedLevel2: 2,
    DamagedLevel3: 3,
}
```

Returns a `number`.

### Declaration

```typescript
vehicle.getPartDamageLevel(partId: VehiclePart): number
```

### Usage

```js
const damageAmount = vehicle.getPartDamageLevel(0);
```

### Real World Example

```js
const vehicle = new alt.Vehicle(`elegy`, 0, 0, 0, 0, 0, 0);
const damageAmount = vehicle.getPartDamageLevel(0);

if (damageAmount >= 1) {
    console.log(`Elegy has ${damageAmount} is damaged.`);
}
```

_These examples assume you have imported `alt` from `alt-server`._