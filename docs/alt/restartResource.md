---
title: 'alt.restartResource'
description: 'Restarts the specified resource.'
prefix: '[Server]'
---

# alt.restartResource

Used to restart a resource. Any data or state that is stored on individual entities will be lost during the resource restart.

### Declaration

```typescript
alt.restartResource(name: string): void
```

## Example

```js
alt.restartResource('someResourceName');
```

### Real World Example

```js
alt.restartResource('someResourceName');
```

_These examples assume you have imported `alt` from `alt-server`._