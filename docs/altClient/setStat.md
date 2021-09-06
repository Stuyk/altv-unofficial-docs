---
title: 'alt.setStat'
description: 'Sets a stat to a specific numerical value.'
prefix: '[Client]'
---

# alt.setStat

Sets a stat to a specific numerical value.

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

### Declaration

```typescript
alt.setStat(statName: StatName, value: number): void
```

### Usage

```js
alt.setStat('stamina', 100);
```

### Real World Example

```js
alt.setStat('stamina', 100);
```

_These examples assume you have imported `alt` from `alt-client`._