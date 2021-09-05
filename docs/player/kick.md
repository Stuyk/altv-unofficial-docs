---
title: 'player.kick'
description: 'Kick a player with a reason.'
prefix: '[Server]'
---

# player.kick

**Description**

Kick a player with a reason.

**Syntax**

```js
kick(reason?: string): void;
```

### Real World Example

```js
const ping = player.ping;
if (player.ping >= 200) {
    player.kick('Ping too high');
    return;
}
```
