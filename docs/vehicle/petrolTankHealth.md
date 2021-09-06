---
title: 'vehicle.petrolTankHealth'
description: 'Used to set or get current petrol / gas tank health.'
prefix: '[Server]'
---

# petrolTankHealth

Used to `set` or `get` current petrol / gas tank health.

Returns a `number`.

### Declaration

```typescript
vehicle.petrolTankHealth: number;
```

### Usage

```js
const tankHealth = vehicle.petrolTankHealth;

// OR

vehicle.petrolTankHealth = 100;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('zentorno', 0, 0, 0, 0, 0, 0);
vehicle.petrolTankHealth = 100;
```

_These examples assume you have vehicle created or available on `server-side`_