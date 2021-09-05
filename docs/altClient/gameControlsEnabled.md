---
title: 'alt.gameControlsEnabled'
description: 'Returns whether the game controls are currently enabled.'
prefix: '[Client]'
---

# alt.gameControlsEnabled

Determines whether or not game controls are currently enabled.

Returns a `boolean`. (true / false)

### Declaration

```typescript
alt.gameControlsEnabled(): boolean
```

### Usage

```js
alt.gameControlsEnabled();
```

### Real World Example

```js
const result = alt.gameControlsEnabled();

if (result) {
    alt.log('Game Controls are enabled!');
}
```

_These examples assume you have imported `alt` from `alt-client`._