---
title: 'vehicle.getModsCount'
description: 'Used to get the maximum number of mods in a category.'
prefix: '[Server]'
---

# getModsCount

Used to `get` the maximum number of mods in a category.

This will return the number of mods for a given vehicle mod index.

For example using this on an elegy with index `0` returned `20`.

Returns a `number`.

### Declaration

```typescript
vehicle.getModsCount(modIndex: number): number;
```

### Usage

```js
const modsCount = vehicle.getModsCount();
```

### Real World Example

```js
const vehicle = new alt.Vehicle(`elegy`, 0, 0, 0, 0, 0, 0);
vehicle.modKit = 1;
const modsCount = vehicle.getModsCount(0); // 20

console.log(`Elegy has ${modsCount} for index 0`);
```

_These examples assume you have imported `alt` from `alt-server`._