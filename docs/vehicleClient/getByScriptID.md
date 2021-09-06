---
title: 'alt.Vehicle.getByScriptID'
description: 'Used to get a vehicle by a client-side script identifier for natives.'
prefix: '[Client]'
---

# alt.Vehicle.getByScriptID

Used to `get` a vehicle by a client-side script identifier for natives.

Returns a `alt.Vehicle`.

### Declaration

```typescript
alt.Vehicle.getByScriptID(scriptID: number): alt.Vehicle | null
```

### Usage

```js
const vehicle = alt.Vehicle.getByScriptID(1);
```

### Real World Example

Randomizes all vehicle colors on the server.

```js
const vehicle = alt.Vehicle.getByScriptID(1);

if (vehicle) {
    console.log(`Vehicle Exists on client-side!`);
}
```

_These examples assume you have vehicle created or available on `client-side`_