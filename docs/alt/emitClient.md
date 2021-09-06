---
title: 'alt.emitClient'
description: 'Emits specified event to specific client.'
prefix: '[Server]'
---

# alt.emitClient

Used to emit an event to a single player. They will receive this event on `client-side` from the `server`.

Useful for opening WebViews, showing notifications, or triggering pretty much anything to show up on client-side.

### Declaration(s)

```typescript
alt.emitClient(player: Player, eventName: string, ...args: any[]): void

alt.emitClient(null, eventName: string, ...args: any[]): void

alt.emitClient(players: Player[], eventName: string, ...args: any[]): void
```

_All of these are valid ways to use this function._

### Usage

```js
alt.emitClient(somePlayer, 'someCustomEvent', additional, args, can, go, here);
```

### Real World Example

Base example simply emits an client-side event to the player who joins through the `playerConnect` event.

```js
function someCallbackFunction(player) {
    alt.emitClient(player, 'customEventName', 'hello world');
}

alt.on('playerConnect', someCallbackFunction);
```

### Optional Usage #1

This iteration of the emit will emit it to *all* players.

```js
 alt.emitClient(null, 'customEventName', 'hello world')
```

### Optional Usage #2

This iteration of the emit will emit it to players who are passed from a list.

```js
const validPlayers = alt.Player.all.filter(player => player.name === 'johnny');

 alt.emitClient(validPlayers, 'customEventName', 'hello world')
```

### Retrieving the Event on Client Side

When an emitClient is sent to a player the client-side can retrieve this event by using the `onServer` function from `alt`.

Example being...

```js
alt.onServer('customEventName', (arg1, arg2, etc) => {
    console.log(arg1);
});
```

_These examples assume you have imported `alt` from `alt-server`._