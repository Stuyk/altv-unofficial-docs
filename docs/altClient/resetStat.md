---
title: 'alt.resetStat'
description: 'Resets a stat back to the default value for the client.'
prefix: '[Client]'
---

# alt.resetStat

Resets a stat back to the default value for the client.

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
alt.resetStat(statName: StatName): void
```

### Usage

```js
alt.resetStat('flying_ability');
```

### Real World Example

```js
alt.resetStat('flying_ability');
```

_These examples assume you have imported `alt` from `alt-client`._