---
title: 'alt.Voice.muteInput'
description: 'Returns whether or not the local client has voice muted.'
prefix: '[Client]'
---

# alt.Voice.muteInput

Used to check if the local client has voice muted.

If you want to `mute` another player use `player.nonSpatialVolume` to change their volume.

Returns a `boolean` (true / false)

### Declaration

```typescript
alt.Voice.muteInput: boolean
```

### Usage
```js
const result = alt.Voice.muteInput;
```

### Real World Example

```js
const result = alt.Voice.muteInput;
console.log(`Voice Input is muted? ${result}`);
```

_These examples assume you have imported `alt` from `alt-client`._
