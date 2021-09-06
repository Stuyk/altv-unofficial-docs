---
title: 'player.entityAimingAt'
description: 'Get the vehicle, player, etc. that the player is aiming at.'
prefix: '[Server]'
---

# player.entityAimingAt

**Description**

Get the vehicle, player, etc. that the player is aiming at.

**Syntax**

```js
readonly entityAimingAt: entity | null;
```

### Real World Example

```js
const target = player.entityAimingAt;

if (target !== someOtherPlayer) {
    // not aiming at the player we are looking for
    return;
}

// is aiming at the player we are looking for
```
