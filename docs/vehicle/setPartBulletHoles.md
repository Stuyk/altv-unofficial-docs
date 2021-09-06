---
title: 'vehicle.setPartBulletHoles'
description: 'Used to set number of bullet holes on a vehicle part.'
prefix: '[Server]'
---

# setPartBulletHoles

Used to `set` number of bullet holes on a vehicle part.

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

### Declaration

```typescript
vehicle.setPartBulletHoles(partId: number, count: number): void
```

### Usage

```js
vehicle.setPartBulletHoles(0, 0);
```

### Real World Example

```js
const vehicle = new alt.Vehicle(`elegy`, 0, 0, 0, 0, 0, 0);
vehicle.setPartBulletHoles(0, 0);
```

_These examples assume you have vehicle created or available on `server-side`_