---
title: 'player.flashlightActive'
description: 'Check if flashlight is active for this player.'
prefix: '[Server]'
---

# player.flashlightActive

**Description**

Check if flashlight is active for this player.

**Syntax**

```js
readonly flashlightActive: boolean;
```

### Real World Example

```js
const isActive = player.flashlightActive;

if (!isActive) {
    // I can't see anything captain!
    return;
}

// I can see everything captain!
```
