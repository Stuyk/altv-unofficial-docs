---
title: 'alt.isInStreamerMode'
description: 'Returns if the alt:V client currently has streamer mode enabled or not.'
prefix: '[Client]'
---

# alt.isInStreamerMode

Returns if the GTA:V client is currently in streamer mode or not.

Streamer mode basically prevents WebViews with `overlay` enabled from being shown to OBS when capturing in `Game Capture` mode.

Returns a `boolean`. (true / false)

### Declaration

```typescript
isInStreamerMode(): boolean
```

### Usage

```js
alt.isInStreamerMode();
```

### Real World Example

```js
const result = alt.isInStreamerMode();
alt.log(result);
```

_These examples assume you have imported `alt` from `alt-client`._