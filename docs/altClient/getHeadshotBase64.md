---
title: 'alt.getHeadshotBase64'
description: 'Used to get the Base64 Image representation from a Ped Headshot ID from a native.'
prefix: '[Client]'
---

# alt.getHeadshotBase64

Gets a pedestrian headshot as a string. The image is either `64x64` or `128x128`.

Returns a `string` representation of an image in base64 format. Saving the string as a `.jpg` will result in an image. 

Natives to call before using this function:

```
native.registerPedheadshot
native.registerPedheadshotTransparent
native.registerPedheadshot3
```

### Declaration

```typescript
alt.getHeadshotBase64(headshotFromNative: number): string
```

### Usage

```js
const result = alt.getHeadshotBase64(someHeadshotID);
```

### Real World Example

```js
const someHeadshotID = native.registerPedheadshot(alt.Player.local.scriptID);
const result = alt.getHeadshotBase64(someHeadshotID);

console.log(result);
```

### Example Image Output

![](https://i.imgur.com/XjC3FmB.png)

_These examples assume you have imported `alt` from `alt-client`._