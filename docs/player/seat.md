---
title: 'player.seat'
description: 'Get the seat a player is in if they are in a vehicle.'
prefix: '[Server]'
---

# player.seat

Get the player's seat if they are in a vehicle.

 * Seats on server-side are different than client-side.
 * Meaning the numbers differ from server-side and client-side.
 * Server-side seats start at 1. (Driver)
 * Client-side native seats start at -1. (Driver)

**Syntax**

```js
readonly seat: number;
```

### Real World Example

```js
const seat = player.seat;
if (seat === 1) {
    console.log('They are the driver');
    return;
}
```
