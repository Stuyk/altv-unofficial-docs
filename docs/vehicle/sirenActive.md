---
title: 'vehicle.sirenActive'
description: 'Used to set or get the siren activity of a vehicle.'
prefix: '[Server]'
---

# sirenActive

Used to `set` or `get` the siren activity of a vehicle.

Only applies to vehicles with sirens. Like a police car.

Returns a `boolean`.

### Declaration

```typescript
vehicle.sirenActive: boolean;
```

### Usage

```js
const isSirenActive = vehicle.sirenActive;

// OR

vehicle.sirenActive = true;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('police', 0, 0, 0, 0, 0, 0);
vehicle.sirenActive = true;
```

_These examples assume you have vehicle created or available on `server-side`_