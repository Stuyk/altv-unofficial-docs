---
title: 'alt.setWeatherSyncActive'
description: 'Sets the current weather cycle to be active.'
prefix: '[Client]'
---

# alt.setWeatherSyncActive

Enabled weather synchronization with `setWeatherCycle`.

This does **not work** unless `setWeatherCycle` is used.

### Declaration

```typescript
alt.setWeatherSyncActive(isActive: boolean): void
```

### Usage

```js
alt.setWeatherSyncActive(true);
```

### Real World Example

```js
alt.setWeatherSyncActive(true);
```

_These examples assume you have imported `alt` from `alt-client`._