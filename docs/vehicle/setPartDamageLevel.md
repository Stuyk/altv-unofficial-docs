---
title: 'vehicle.setPartDamageLevel'
description: 'Used to set the vehicle part damage level.'
prefix: '[Server]'
---

# setPartDamageLevel

Used to `set` the vehicle part damage level.

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

### Declaration

```typescript
vehicle.setPartDamageLevel(partId: VehiclePart, damageLevel: number): void
```

### Usage

```js
vehicle.setPartDamageLevel(0, 0);
```

### Real World Example

```js
const vehicle = new alt.Vehicle(`elegy`, 0, 0, 0, 0, 0, 0);
vehicle.setPartDamageLevel(0, 0);
```

_These examples assume you have vehicle created or available on `server-side`_