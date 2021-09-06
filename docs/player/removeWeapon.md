---
title: 'player.removeWeapon'
description: 'Used to remove a weapon based on hash.'
prefix: '[Server]'
---

# player.removeWeapon

**Description**

Used to remove a player weapon based on a weapon.

[Check out the Weapon Table](../articles/tables/weapons.md)

**Syntax**

```js
removeWeapon(weaponHash: number): void;
```

### Real World Example

```js
// Combat shotgun.
player.removeWeapon(0x5a96ba4);
```
