---
title: 'alt.hash'
description: "Creates a hash using Jenkins one-at-a-time algorithm.
"
prefix: '[Client]'
---

# alt.hash

Performs a `joaat` hash on a string. Fancy way of saying a hash algorithm that GTA:V uses.

Returns a `string`.

### Declaration

```typescript
alt.hash(str: string): number
```

### Usage

```js
alt.hash('washington');
```

### Real World Example

```js
const hash = alt.hash('washington');
alt.log(hash);
```

_These examples assume you have imported `alt` from `alt-client`._