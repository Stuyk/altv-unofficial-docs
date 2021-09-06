---
title: 'vehicle.setArmoredWindowHealth'
description: 'Used to set the health of a window.'
prefix: '[Server]'
---

# setArmoredWindowHealth

Used to set the health of a window.

### Declaration

```typescript
vehicle.setArmoredWindowHealth(window: number, health: number): void;
```

### Usage

```js
vehicle.setArmoredWindowHealth(0, 100);
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.setArmoredWindowHealth(0, 100);
```

_These examples assume you have vehicle created or available on `server-side`_