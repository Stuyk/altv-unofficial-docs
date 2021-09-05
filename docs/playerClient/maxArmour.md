---
title: 'player.maxArmour'
description: 'Get player maximum armour.'
prefix: '[Client]'
---

# alt.Player.local.maxArmour

Used to get the player's Maximum Armour.

**Syntax**

```js
readonly maxArmour: number;
```

### Real World Example

```js
const maxArmour = alt.Player.local.maxArmour;
console.log(`Your max armour is: ${maxArmour}`);
```

_alt.Player.local can also be a **player instance** from server_
