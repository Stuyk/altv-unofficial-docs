---
title: 'vehicle.nightlightOn'
description: 'Used to get the status of a center console light in the vehicle.'
prefix: '[Server]'
---

# nightlightOn

Used to `get` the status of a center console light in the vehicle.

Returns a `boolean`.

### Declaration

```typescript
vehicle.nightlightOn: boolean;
```

### Usage

```js
const isOn = vehicle.nightlightOn;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('washington', 0, 0, 0, 0, 0, 0);
const isOn = vehicle.nightlightOn;
```

_These examples assume you have vehicle created or available on `server-side`_