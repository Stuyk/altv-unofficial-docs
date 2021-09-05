---
title: 'vehicle.getMod'
description: 'Used to get a mod value from a vehicle.'
prefix: '[Server]'
---

# getMod

Used to `get` a mod value from a vehicle.

It will return `0` if no mod is specified for that index value.

Might be useful for checking if a mod is correctly set.

Returns a `number`.

### Declaration

```typescript
vehicle.getMod(modIndex: number): number;
```

### Usage

```js
const modValue = vehicle.getMod();
```

### Real World Example

```js
const vehicle = new alt.Vehicle(`elegy`, 0, 0, 0, 0, 0, 0);
const modValue = vehicle.getMod(0);
```

_These examples assume you have imported `alt` from `alt-server`._