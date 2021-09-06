---
title: 'alt.getGxtText'
description: 'Gets the current value of a GXT Text Entry'
prefix: '[Client]'
---

# alt.getGxtText

Gets the current value of a GXT Text Entry.

Returns a `string`.

### Declaration

```typescript
alt.getGxtText(key: string): string
```

### Usage

```js
const result = alt.getGxtText('gxtBlipName');
```

### Real World Example

```js
const result = alt.getGxtText('gxtBlipName');
alt.log(result);
```

_These examples assume you have imported `alt` from `alt-client`._