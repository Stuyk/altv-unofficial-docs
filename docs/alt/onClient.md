---
title: 'alt.onClient'
description: 'Subscribes to client event with specified listener.'
prefix: '[Server]'
---

# alt.onClient

An event that is triggered by `any` player who meets the criteria on `client-side` to trigger the event. This is logic that is specified by the code on `client-side`.

The event can be triggered any amount of times.

First `argument` in the function will always be a `Player`.

### Declaration

```typescript
alt.onClient(eventName: string, listener: (player: Player, ...args: any[]) => void): void
```

### Usage

```js
alt.onClient('someEvent', someCallbackFunction);
```

### Real World Example

```js
function someCallbackFunction(player, someArg) {
    console.log(`${player.name} has triggered this event`);
}

alt.onClient('someEvent', someCallbackFunction);
```

_These examples assume you have imported `alt` from `alt-server`._