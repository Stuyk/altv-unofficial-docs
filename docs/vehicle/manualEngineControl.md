---
title: 'vehicle.manualEngineControl'
description: 'Used to set or get if the vehicle should be turned on automatically or not when a player enters the vehicle.'
prefix: '[Server]'
---

# manualEngineControl

Used to `set` or `get` if the vehicle should be turned on automatically or not when a player enters the vehicle.

Returns a `boolean`.

### Declaration

```typescript
vehicle.manualEngineControl: boolean;
```

### Usage

```js
const isManual = vehicle.manualEngineControl;

// OR

vehicle.manualEngineControl = 20;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('sanchez', 0, 0, 0, 0, 0, 0);
vehicle.manualEngineControl = 1;
```

_These examples assume you have vehicle created or available on `server-side`_