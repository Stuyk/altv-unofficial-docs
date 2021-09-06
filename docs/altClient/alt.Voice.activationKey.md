---
title: 'alt.Voice.activationKey'
description: 'Returns the activation keycode used for voice input.'
prefix: '[Client]'
---

# alt.Voice.activationKey

Used to get the current JavaScript keycode for alt:V's internal voice activation.

Returns a `number`.

### Declaration

```typescript
alt.Voice.activationKey: number
```

### Usage
```js
const result = alt.Voice.activationKey;
```

### Real World Example

```js
const result = alt.Voice.activationKey;
console.log(`Activation Key is: ${result}`);
```

_These examples assume you have imported `alt` from `alt-client`._
