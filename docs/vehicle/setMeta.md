---
title: 'vehicle.setMeta'
description: 'Used to set cross-resource accessible information on a vehicle.'
prefix: '[Server]'
---

# setMeta

Used to store cross-resource accessible information. This functionality stores an object on a player that can than be accessed with [getMeta](./getMeta.md)

_This type of meta is only accessible where it is created._

_If it is created on the client-side it is only accessible on the client-side._

_If it's created on the server-side it is only accessible on the server-side._

### Declaration

```typescript
vehicle.setMeta(key: string, value: any): void;
```

### Usage

```typescript
vehicle.setMeta('myData', 'hello world');
```

_These examples assume you have vehicle created or available on `server-side`_