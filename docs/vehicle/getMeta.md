---
title: 'vehicle.getMeta'
description: 'Used to get cross-resource accessible information on a vehicle.'
prefix: '[Server]'
---

# getMeta

Used to store cross-resource accessible information. This functionality stores an object on a vehicle that can than be set with [setMeta](./setMeta.md)

_This type of meta is only accessible where it is created._

_If it is created on the client-side it is only accessible on the client-side._

_If it's created on the server-side it is only accessible on the server-side._

### Declaration

```typescript
vehicle.getMeta(key: string): unknown;
```

### Usage

```typescript
const result = vehicle.getMeta('myData');
```

### Real World Example

```js
const result = vehicle.getMeta('myData');

// Data does not exist.
if (!result) {
    return;
}

console.log(result);
```

_These examples assume you have vehicle created or available on `server-side`_