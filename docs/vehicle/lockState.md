---
title: 'vehicle.lockState'
description: 'Used to set or get the lock state of a vehicle.'
prefix: '[Server]'
---

# lockState

Used to `set` or `get`  the lock state of a vehicle. Basically if the vehicle can be entered or left.

**Lock State**

```js
{
    None: 0,
    Unlocked: 1,
    Locked: 2,
    LockoutPlayerOnly: 3,
    LockPlayerInside: 4,
    InitiallyLocked: 5,
    ForceDoorsShut: 6,
    LockedCanBeDamaged: 7,
}
```

Most developers will likely only need `1` & `2` for locking / unlocking the vehicle.

Returns a `number`.

### Declaration

```typescript
vehicle.lockState: number;
```

### Usage

```js
const lockState = vehicle.lockState;

// OR

vehicle.lockState = 1;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('sanchez', 0, 0, 0, 0, 0, 0);
vehicle.lockState = 1;

if (vehicle.lockState === 1) {
    console.log('Unlocked!');
}

if (vehicle.lockState === 2) {
    console.log('Locked!');
}
```

_These examples assume you have vehicle created or available on `server-side`_