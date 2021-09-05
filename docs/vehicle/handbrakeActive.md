---
title: 'vehicle.handbrakeActive'
description: 'Used to get if the handbrake is currently activated.'
prefix: '[Server]'
---

# handbrakeActive

Used to `get` if the handbrake is currently activated.

Returns a `boolean`.

### Declaration

```typescript
vehicle.handbrakeActive: boolean;
```

### Usage

```js
const isActive = vehicle.handbrakeActive;
```

### Real World Example

Not really a useful example but here's how it could be used.

```js
const vehicle = new alt.Vehicle(`elegy`, 0, 0, 0, 0, 0, 0);

alt.setInterval(() => {
    const isActive = vehicle.handbrakeActive;
    if (isActive) {
        console.log(`Activated Handbrake! Skkkrrrrt.`);
    }
}, 200);

```

_These examples assume you have imported `alt` from `alt-server`._