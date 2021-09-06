---
title: 'vehicle.getStreamSyncedMeta'
description: 'Used to get cross-resource accessible information based on stream in for a vehicle.'
prefix: '[Server]'
---

# getStreamSyncedMeta

Used to store cross-resource accessible information. This functionality stores an object on a player that can than be set with [setStreamSyncedMeta](./setStreamSyncedMeta.md). This can also be accessed on client-side.

The player on client-side is only updated if they are in streaming range of another player.

_This type of meta is accessible anywhere but can only be set on server-side._

### Declaration

```typescript
vehicle.getStreamSyncedMeta(key: string): unknown;
```

### Usage

```typescript
const result = vehicle.getStreamSyncedMeta('myData');
```

### Real World Example

```js
const data = vehicle.getStreamSyncedMeta('myData');
if (!data) {
    // Does does not exist.
    return;
}

console.log(data);
```

_These examples assume you have vehicle created or available on `server-side`_