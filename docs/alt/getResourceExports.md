---
title: 'alt.getResourceExports'
description: 'Gets the exports of the specified resource.'
prefix: '[Server]'
---

# alt.getResourceExports

Used to get the current exported functions from another resource. Only useful if your resources are not in a single resource. In most cases developers on alt:V do not use multiple resources due to limitations.

May return an `object`?

### Declaration

```typescript
alt.getResourceExports(name: string): any
```

### Usage

```js
alt.getResourceExports('resourceName');
```

### Real World Example

```js
const resource = alt.getResourceExports('myresource');
console.log(resource);
```

_These examples assume you have imported `alt` from `alt-server`._
