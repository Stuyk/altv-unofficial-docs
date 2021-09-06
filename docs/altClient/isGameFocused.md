---
title: 'alt.isGameFocused'
description: 'Returns if the GTA:V client is currently focused or not.'
prefix: '[Client]'
---

# alt.isGameFocused

Returns if the GTA:V client is currently focused or not.

Returns a `boolean`. (true / false)

### Declaration

```typescript
isGameFocused(): boolean
```

### Usage

```js
alt.isGameFocused();
```

### Real World Example

```js
const result = alt.isGameFocused();
alt.log(result);
```

_These examples assume you have imported `alt` from `alt-client`._