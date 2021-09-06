---
title: 'alt.toggleVoiceControls'
description: 'Sets the current state of internal voice controls for alt:V.'
prefix: '[Client]'
---

# alt.toggleVoiceControls

Sets the current state of internal voice controls for alt:V.

When set to `false` the voice controls are **not** `active`.

### Declaration

```typescript
alt.toggleVoiceControls(state: boolean): void
```

### Usage

```js
alt.toggleVoiceControls(false);
```

### Real World Example

```js
alt.toggleVoiceControls(false);
```

_These examples assume you have imported `alt` from `alt-client`._