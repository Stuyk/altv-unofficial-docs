---
title: 'alt.emitAllClients'
description: 'Emits specified event to all clients.'
prefix: '[Server]'
---

# alt.emitAllClients

Used to emit an event to all currently connected players. 

If you need to check if a player is logged in or something of the sort then you should do a simple for loop with `alt.Player.all` and check against other data.

This function simply does not care what data a player has it will emit it to them regardless.

### Declaration

```typescript
alt.emitAllClients(eventName: string, ...args: any[]): void
```

### Usage

```js
alt.emitAllClients('someEventName', additional, args, can, go, here);
```

### Real World Example

```js
function someCallbackFunction(player) {
    const number = 56;
    alt.emitAllClients('customEventName', number);
}

alt.on('playerConnect', someCallbackFunction);
```

## Raw Example

This example is the alternative implementation of the above. It will simply check if a player has a variable defined on them before emitting it to that player.


```js
alt.Player.all.forEach(player => {
    // Just an example don't take this literally.
    if (!player.isLoggedIn) {
        return;
    }

    alt.emitClient(player, 'customEventName', whatever, args);
});
```

_These examples assume you have imported `alt` from `alt-server`._