---
title: 'player.visible'
description: 'Get player visibility based on server setter.'
prefix: '[Client]'
---

# alt.Player.local.visible

Get the player's visbility.

**Syntax**

```js
readonly visible: boolean;
```

### Real World Example

```js
const isLocalVisible = alt.Player.local.visible;
console.log(`Is Visible? ${isLocalVisible}`);
```

_alt.Player.local can also be a **player instance** from server_
