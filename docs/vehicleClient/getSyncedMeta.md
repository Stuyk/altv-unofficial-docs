---
title: 'vehicle.getSyncedMeta'
description: 'Used to get cross-resource accessible information.'
prefix: '[Client]'
---

# getSyncedMeta

Used to store cross-resource accessible information.

_This type of meta is accessible anywhere but can only be set on server-side._

### Declaration

```typescript
vehicle.getSyncedMeta(key: string): unknown;
```

### Usage

```typescript
const result = vehicle.getSyncedMeta('myData');
```

### Real World Example

```js
const data = alt.Player.local.vehicle.getSyncedMeta('myData');
if (!data) {
    // Does does not exist.
    return;
}

console.log(data);
```

_These examples assume you have vehicle created or available on `client-side`_