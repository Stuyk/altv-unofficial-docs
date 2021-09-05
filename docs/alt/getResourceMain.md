---
title: 'alt.getResourceMain'
description: 'Gets the main file of the specified resource.'
prefix: '[Server]'
---

# alt.getResourceMain

Gets the main file name of the specified resource.

Returns a `string`.

_It is not very useful._

### Declaration

```typescript
alt.getResourceMain(name: string): string
```

### Usage

```js
alt.getResourceMain('someResource');
```

### Real World Example

```js
const resource = alt.getResourceMain('someResource');
if (resource) {
    alt.log(resource);
}
```

_These examples assume you have imported `alt` from `alt-server`._