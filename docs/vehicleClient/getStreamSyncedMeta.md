---
title: 'vehicle.getStreamSyncedMeta'
description: 'Used to get cross-resource accessible information based on stream in for a vehicle.'
prefix: '[Client]'
---

# getStreamSyncedMeta

Used to store cross-resource accessible information. 

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
const data = alt.Player.local.vehicle.getStreamSyncedMeta('myData');
if (!data) {
    // Does does not exist.
    return;
}

console.log(data);
```

_These examples assume you have vehicle created or available on `client-side`_