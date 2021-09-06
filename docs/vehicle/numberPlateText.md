---
title: 'vehicle.numberPlateText'
description: 'Used to set or get the current license plate text.'
prefix: '[Server]'
---

# numberPlateText

Used to `set` or `get` the current license plate text.

Max is `7` character(s).

Returns a `string`.

### Declaration

```typescript
vehicle.numberPlateText: string;
```

### Usage

```js
const currentText = vehicle.numberPlateText;

// OR

vehicle.numberPlateText = 'Hello';
```

### Real World Example

```js
const vehicle = new alt.Vehicle('washington', 0, 0, 0, 0, 0, 0);
vehicle.numberPlateText = 'Stuyk';
```

### Visual

_No specific order on these, just showing what it does._

![](https://i.imgur.com/CKEYyDd.png)
![](https://i.imgur.com/28ETBwv.png)

_These examples assume you have vehicle created or available on `server-side`_