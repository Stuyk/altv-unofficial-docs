---
title: 'alt.removeIpl'
description: 'Removes an IPL from the world.'
prefix: '[Client]'
---

# alt.removeIpl

Removes Item Placement from the world. Meaning how a specific house, interior, etc. looks inside of the world.

### Declaration

```typescript
alt.removeIpl(iplName: string): void
```

### Usage

```js
alt.removeIpl('farm_burnt');
```

### Real World Example

```js
alt.removeIpl('farm_burnt');
alt.removeIpl('farm_burnt_lod');
alt.removeIpl('farm_burnt_props');
alt.removeIpl('farmint_cap');
alt.removeIpl('farmint_cap_lod');
```

_These examples assume you have imported `alt` from `alt-client`._