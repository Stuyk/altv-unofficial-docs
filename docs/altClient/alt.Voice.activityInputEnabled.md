---
title: 'alt.Voice.activityInputEnabled'
description: 'Returns the activation keycode used for voice input.'
prefix: '[Client]'
---

# alt.Voice.activityInputEnabled

Used to check if the client is using `Voice Activity` to speak over voice chat.

Returns a `boolean` (true / false)

### Declaration

```typescript
alt.Voice.activityInputEnabled: boolean
```

### Usage
```js
const result = alt.Voice.activityInputEnabled;
```

### Real World Example

```js
const result = alt.Voice.activityInputEnabled;
console.log(`Voice activity is currently set to ${result}`);
```

_These examples assume you have imported `alt` from `alt-client`._
