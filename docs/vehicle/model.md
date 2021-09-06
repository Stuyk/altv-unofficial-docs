---
title: 'vehicle.model'
description: 'Used to get the vehicle model as a joaat hash.'
prefix: '[Server]'
---

# model

Used to `get` the vehicle model as a joaat hash.

Returns a `string`.

### Declaration

```typescript
vehicle.model: string;
```

### Usage

```js
const currentModelHash = vehicle.model;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('sanchez', 0, 0, 0, 0, 0, 0);
const currentModelHash = vehicle.model;

console.log(currentModelHash);
```

_These examples assume you have vehicle created or available on `server-side`_