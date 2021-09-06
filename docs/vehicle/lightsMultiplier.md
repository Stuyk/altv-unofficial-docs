---
title: 'vehicle.lightsMultiplier'
description: 'Used to set or get the multipler for vehicle lights. Which decreases or inreases brightness.'
prefix: '[Server]'
---

# lightsMultiplier

Used to `set` or `get` the multipler for vehicle lights. Which decreases or inreases brightness.

Returns a `number`.

### Declaration

```typescript
vehicle.lightsMultiplier: number;
```

### Usage

```js
const currentMultiplier = vehicle.lightsMultiplier;

// OR

vehicle.lightsMultiplier = 20;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.lightsMultiplier = 20;
```

### Visual

![](https://i.imgur.com/2XxGzii.png)

_These examples assume you have vehicle created or available on `server-side`_