---
title: 'vehicle.deleteMeta'
description: 'Used to remove cross-resource accessible information on client-side.'
prefix: '[Client]'
---

# deleteMeta

Used to remove cross-resource accessible information on client-side.

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
alt.Player.local.vehicle.deleteMeta('myData');
```

_These examples assume you have vehicle created or available on `client-side`_