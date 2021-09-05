---
title: 'player.maxArmour'
description: "Used to get or set the player's Maximum Armour."
prefix: '[Server]'
---

# player.maxArmour

**Description**

Used to get or set the player's Maximum Armour.
Makes it larger than 100.

**Syntax**

```js
maxArmour: number;
```

### Real World Example

```js
const maxArmour = player.maxArmour;
console.log(`Their max armour is: ${maxArmour}`);
player.maxArmour = 1999;
```
