---
title: 'alt.stopResource'
description: 'Stops the specified resource.'
prefix: '[Server]'
---

# alt.stopResource

Used to stop a resource by name if it has not already been stopped.

### Declaration

```typescript
alt.stopResource(name: string): void
```

### Usage

```js
alt.stopResource('myresource');
```

### Real World Example

```js
alt.stopResource('myresource');
```

_These examples assume you have imported `alt` from `alt-server`._