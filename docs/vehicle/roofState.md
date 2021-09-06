---
title: 'vehicle.roofState'
description: 'Used to get whether or not the roof window of a vehicle is open, applies to convertibles as well.'
prefix: '[Server]'
---

# roofState

Used to `get` whether or not the roof window of a vehicle is open, applies to convertibles as well.

Returns a `boolean`.

### Declaration

```typescript
vehicle.roofState: boolean;
```

### Usage

```js
const isOpen = vehicle.roofState;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('issi', 0, 0, 0, 0, 0, 0);
const isOpen = vehicle.roofState;
```

_These examples assume you have vehicle created or available on `server-side`_