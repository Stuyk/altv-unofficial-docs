---
title: 'vehicle.setArmoredWindowShootCount'
description: 'Used to set the set / reset the amount of times a window was shot.'
prefix: '[Server]'
---

# setArmoredWindowShootCount

Used to set the set / reset the amount of times a window was shot.

### Declaration

```typescript
vehicle.setArmoredWindowShootCount(window: number, amount: number): void;
```

### Usage

```js
vehicle.setArmoredWindowShootCount(0, 0);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.setArmoredWindowShootCount(0, 0);
```

_These examples assume you have vehicle created or available on `server-side`_