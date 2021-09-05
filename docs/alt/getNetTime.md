---
title: 'alt.getNetTime'
description: 'Gets the amount of milliseconds since the server was started.'
prefix: '[Server]'
---

# alt.getNetTime

Returns a result for the current network time on server-side.

### Declaration

```typescript
alt.getNetTime(): number
```

### Usage

```js
alt.getNetTime();
```

### Real World Example

```js
const netTime = alt.getNetTime();
alt.log(`The current netTime is: ${netTime}`);
```

_These examples assume you have imported `alt` from `alt-server`._