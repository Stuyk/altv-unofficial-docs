---
title: 'alt.requestIpl'
description: 'Requests an IPL to be rendered in the world.'
prefix: '[Client]'
---

# alt.requestIpl

Requests Item Placement in the world. Meaning how a specific house, interior, etc. looks inside of the world.

### Declaration

```typescript
alt.requestIpl(iplName: string): void
```

### Usage

```js
alt.requestIpl('farm');
```

### Real World Example

```js
alt.requestIpl('farm');
alt.requestIpl('farmint');
alt.requestIpl('farm_lod');
alt.requestIpl('farm_props');
```

_These examples assume you have imported `alt` from `alt-client`._