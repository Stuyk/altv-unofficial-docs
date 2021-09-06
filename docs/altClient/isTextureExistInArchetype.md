---
title: 'alt.isTextureExistInArchetype'
description: 'Used to check if a texture currently exists on a model.'
prefix: '[Client]'
---

# alt.isTextureExistInArchetype

Used to check if a texture currently exists on a model.

Useful for attaching a WebView to a specific texture on a model.

Returns a `boolean`. (true / false)

### Declaration

```typescript
alt.isTextureExistInArchetype(modelHash: number, textureName: string): boolean
```

### Usage

```js
const result = alt.isTextureExistInArchetype(someModelHash, someTextureName);
```

### Real World Example

```js
const model = 'v_ilev_cin_screen';
const texture = 'script_rt_cinscreen';
const hash = alt.hash(model);
const result = alt.isTextureExistInArchetype(hash, texture);

if (result) {
    console.log(`Model with texture exists!`);
} else {
    console.log(`Could not find model with texture.`);
}

```

_These examples assume you have imported `alt` from `alt-client`._