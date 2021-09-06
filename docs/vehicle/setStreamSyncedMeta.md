---
title: 'vehicle.setStreamSyncedMeta'
description: 'Used to set cross-resource accessible information based on stream in on a vehicle.'
prefix: '[Server]'
---

# vehicle.setStreamSyncedMeta

Used to store cross-resource accessible information. This functionality stores an object on a player that can than be accessed with [getStreamSyncedMeta](./getStreamSyncedMeta.md). This can also be accessed on client-side.

The player on client-side is only updated if they are in streaming range of another player.

_This type of meta is accessible anywhere but can only be set on server-side._

### Declaration

```typescript
vehicle.setStreamSyncedMeta(key: string, value: any): void;
```

### Usage

```typescript
vehicle.setStreamSyncedMeta('myData', 'hello world');
```

_These examples assume you have vehicle created or available on `server-side`_