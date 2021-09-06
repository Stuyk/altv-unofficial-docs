---
title: 'vehicle.deleteMeta'
description: 'Used to remove cross-resource accessible information on server-side.'
prefix: '[Server]'
---

# deleteMeta

Used to remove cross-resource accessible information on server-side.

### Declaration

```typescript
vehicle.deleteMeta(key: string): void;
```

### Usage

```js
vehicle.deleteMeta('myData');
```

### Real World Usage

```js
function enteredVehicle(player, vehicle, seat) {
    vehicle.deleteMeta('myData');
}

alt.on('playerEnteredVehicle', enteredVehicle);
```

_These examples assume you have vehicle created or available on `client-side`_