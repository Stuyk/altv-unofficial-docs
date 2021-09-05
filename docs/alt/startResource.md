---
title: 'alt.startResource'
description: 'Starts the specified resource.'
prefix: '[Server]'
---

# alt.startResource

Used to start a resource by name if it has not already been started.

### Declaration

```typescript
alt.startResource(name: string): void
```

### Usage

```js
alt.startResource('someResourceName');
```

### Real World Example

```js
alt.startResource('someResourceName');
```

_These examples assume you have imported `alt` from `alt-server`._