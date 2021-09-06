---
title: 'player.ping'
description: 'Get a players current ping.'
prefix: '[Server]'
---

# player.ping

**Description**

Get the player's current ping.

**Syntax**

```js
readonly ping: number;
```

### Real World Example

```js
const ping = player.ping;
if (player.ping >= 200) {
    player.kick('Ping too high');
    return;
}
```
