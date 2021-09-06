---
title: 'alt.getStat'
description: 'Returns the current value of a player stat / ability.'
prefix: '[Client]'
---

# alt.getStat

Returns the current value of a player stat / ability.

**Stat Names**

```
flying_ability	
lung_capacity	
shooting_ability	
stamina	
stealth_ability	
strength	
wheelie_ability
```

Returns a `number`.

### Declaration

```typescript
alt.getStat(): number
```

### Usage

```js
const result = alt.getStat();
```

### Real World Example

```js
const result = alt.getStat();
console.log(result);
```

_These examples assume you have imported `alt` from `alt-client`._