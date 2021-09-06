---
title: 'player.setSyncedMeta'
description: 'Used to set cross-resource accessible information.'
prefix: '[Server]'
---

# player.setSyncedMeta

Used to store cross-resource accessible information. This functionality stores an object on a player that can than be accessed with [getSyncedMeta](./getSyncedMeta.md). This can also be accessed on client-side.

_This type of meta is accessible anywhere but can only be set on server-side._

### Declaration

```typescript
vehicle.setSyncedMeta(key: string, value: any): void;
```

### Usage

```typescript
vehicle.setSyncedMeta('myData', 'hello world');
```

_These examples assume you have vehicle created or available on `server-side`_