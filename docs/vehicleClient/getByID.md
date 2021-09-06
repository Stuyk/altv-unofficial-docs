---
title: 'alt.Vehicle.getByID'
description: 'Used to get a vehicle by a server-side ID.'
prefix: '[Client]'
---

# alt.Vehicle.getByID

Used to `get` a vehicle by a server-side ID.

Returns a `alt.Vehicle`.

### Declaration

```typescript
alt.Vehicle.getByID(value: number): alt.Vehicle | null
```

### Usage

```js
const vehicle = alt.Vehicle.getByID(1);
```

### Real World Example

Randomizes all vehicle colors on the server.

```js
const vehicle = alt.Vehicle.getByID(1);

if (vehicle) {
    console.log(`Vehicle Exists on client-side!`);
}
```

_These examples assume you have vehicle created or available on `client-side`_