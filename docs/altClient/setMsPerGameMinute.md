---
title: 'alt.setMsPerGameMinute'
description: 'Sets the milliseconds per game minute.'
prefix: '[Client]'
---

# alt.setMsPerGameMinute

Set the amount of milliseconds that pass per game minute.

Setting this value will affect the clouds, weather, and time. This does not automatically synchronize with other users.

If set to something too slow it'll create `artifacts` or `glitches` in the weather.

Default is 30000ms.

### Declaration

```typescript
alt.setMsPerGameMinute(milliseconds: number): void
```

### Usage

```js
alt.setMsPerGameMinute(5000);
```

### Real World Example

```js
alt.setMsPerGameMinute(5000);
```

_These examples assume you have imported `alt` from `alt-client`._