---
title: 'vehicle.getExtra'
description: 'Used to get whether or not a door is open for a vehicle.'
prefix: '[Server]'
---

# getExtra

Used to `get` the current extra of a vehicle. Which means things like props that spawn in the trunk of a vehicle.

Caveat for this is that IDs are rumored to go up to 14. However, there could be more extra IDs. You can use `vehicle.hasExtra` with the specified ID to determine whether or not it has an extra attached.

![](https://i.imgur.com/mkdp3W4.png)

Returns a `number`.

### Declaration

```typescript
vehicle.getExtra(someID: number): number;
```

### Usage

```js
const someExtra = vehicle.getExtra(0);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);

// Smash it into some walls before running this.
for(let i = 0; i < 14; i++) {
    const hasExtra = vehicle.hasExtra(i);
    if (hasExtra) {
        const extraValue = vehicle.getExtra(i);
        console.log(`Has Extra at: ${i} with value ${extraValue}`);
    }
}
```

_These examples assume you have imported `alt` from `alt-server`._