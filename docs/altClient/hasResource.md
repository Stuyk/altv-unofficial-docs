---
title: 'alt.hasResource'
description: 'Returns whether the specified resource exists.'
prefix: '[Client]'
---

# alt.hasResource

Used to determine if a resource is currently loaded by the server.

Returns a `boolean`. (true / false)

### Declaration

```typescript
alt.hasResource(name: string): boolean
```

### Usage

```js
alt.hasResource('someResource');
```

### Real World Example

```js
const resource = alt.hasResource('someResource');
if (resource) {
    alt.log('someResource exists');
}
```

_These examples assume you have imported `alt` from `alt-client`._