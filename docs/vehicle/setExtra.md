---
title: 'vehicle.setExtra'
description: 'Used to set the current extra of a vehicle.'
prefix: '[Server]'
---

# setExtra

Used to `set` the current extra of a vehicle. Which means things like props that spawn in the trunk of a vehicle.

Caveat for this is that IDs are rumored to go up to 14. However, there could be more extra IDs. You can use `vehicle.hasExtra` with the specified ID to determine whether or not it has an extra attached.

![](https://i.imgur.com/mkdp3W4.png)

### Declaration

```typescript
vehicle.setExtra(someID: number, enabled: boolean): void;
```

### Usage

```js
vehicle.setExtra(0, true);
```

### Real World Example

There is not a comprehensive example of how to use this.

```js
const vehicle = new alt.Vehicle('dloader', 0, 0, 0, 0, 0, 0);

for(let i = 0; i < 14; i++) {
    vehicle.setExtra(i, true);
}
```

_These examples assume you have vehicle created or available on `server-side`_