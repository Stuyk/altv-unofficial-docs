---
title: 'vehicle.setBumperDamageLevel'
description: 'Used to set / reset the bumper damage level.'
prefix: '[Server]'
---

# setBumperDamageLevel

Used to set / reset the bumper damage level.

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

### Declaration

```typescript
vehicle.setBumperDamageLevel(window: number, health: number): void;
```

### Usage

```js
vehicle.setBumperDamageLevel(0, 0);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.setBumperDamageLevel(0, 0);
```

_These examples assume you have vehicle created or available on `server-side`_