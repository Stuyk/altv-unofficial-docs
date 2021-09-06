---
title: 'alt.on'
description: 'Used to listen to events when a player joins, leaves, dies, etc.'
prefix: '[Server]'
---

# alt.on

Used to listen to built-in events when a player joins, leaves, enters a vehicle, dies, etc.

See the [server event list](../articles/server/server-events.md) for additional examples.

Can also be used to create custom events that can be called when an `emit` is invoked. See [alt.emit](emit.md) for more information.

### Declaration

```typescript
alt.on<K extends keyof IServerEvent>(eventName: K, listener: IServerEvent[K]): void
```

### Usage

```js
alt.on('someEventName', someCallbackFunction);
```

### Real World Example

```js
alt.on('playerConnect', (player) => {
    console.log(`${player.name} has joined the server.`);
});

alt.on('playerDamage', (victim, attacker, damage, weaponHash) => {
    console.log(`${victim.name} has been damaged by ${attacker.name}!`);
});

alt.on('someEventName', (someArgument) => {
    console.log('Got custom event!');
});
```

_These examples assume you have imported `alt` from `alt-server`._
