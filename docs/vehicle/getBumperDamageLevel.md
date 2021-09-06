---
title: 'vehicle.getBumperDamageLevel'
description: 'Used to get the vehicle that this vehicle is attached to.'
prefix: '[Server]'
---

# getBumperDamageLevel

Used to `get` the vehicle that this vehicle is attached to.

**Bumper IDs**

```js
{
    FRONT: 0,
    REAR: 1
}
```

**Damage Values**

```js
{
    NotDamaged: 0,
    Damaged: 1,
    None: 2
}
```

Returns a `number` from the Damage Values section.

### Declaration

```typescript
vehicle.getBumperDamageLevel(bumper: number): number;
```

### Usage

```js
const damageLevel = vehicle.getBumperDamageLevel(0);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('phantom', 0, 0, 0, 0, 0, 0);

// Run into some walls before running this function.
const damageLevel = trailer.getBumperDamageLevel(0);
if (damageLevel === 1) {
    console.log(`Bumper is damaged.`);
}
```

_These examples assume you have vehicle created or available on `server-side`_