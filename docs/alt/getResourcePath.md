---
title: 'alt.getResourcePath'
description: 'Gets the path to the specified resource.'
prefix: '[Server]'
---

# alt.getResourcePath

Gets the full resource path on server-side. 

Useful when using dynamic imports when `__dirname` is not available.

Returns a `string`.

### Declaration

```typescript
alt.getResourcePath(name: string): string
```

### Usage

```js
alt.getResourcePath('someResource');
```

### Real World Example

```js
const resource = alt.getResourcePath('someResource');
if (resource) {
    alt.log(resource);
}
```

_These examples assume you have imported `alt` from `alt-server`._