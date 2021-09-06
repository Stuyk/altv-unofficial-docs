---
title: 'vehicle.numberPlateIndex'
description: 'Used to set or get the current display plate for the license plate.'
prefix: '[Server]'
---

# numberPlateIndex

Used to `set` or `get` the current display plate for the license plate.

Returns a `number`.

### Declaration

```typescript
vehicle.numberPlateIndex: number;
```

### Usage

```js
const currentIndex = vehicle.numberPlateIndex;

// OR

vehicle.numberPlateIndex = 4;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('washington', 0, 0, 0, 0, 0, 0);
vehicle.numberPlateIndex = 1;
```

### Visual

_No specific order on these, just showing what it does._

![](https://i.imgur.com/CKEYyDd.png)
![](https://i.imgur.com/28ETBwv.png)

_These examples assume you have vehicle created or available on `server-side`_