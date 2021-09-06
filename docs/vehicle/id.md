---
title: 'vehicle.id'
description: 'Used to get a session based ID for a vehicle. It is not persistent.'
prefix: '[Server]'
---

# id

Used to `get` a session based ID for a vehicle. It is not persistent.

Returns a `number`.

### Declaration

```typescript
vehicle.id: number;
```

### Usage

```js
const currentID = vehicle.id;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
console.log(vehicle.id);
```

_These examples assume you have vehicle created or available on `server-side`_