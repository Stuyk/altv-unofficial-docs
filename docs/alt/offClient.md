---
title: 'alt.offClient'
description: 'Removed the subscription to an event and turns off an event listener.'
prefix: '[Server]'
---

# alt.offClient

Used to stop listening to built-in events from the client. Meaning that this turns off a function where a client triggers a server-side event.

### Declaration

```typescript
alt.offClient(eventName: string, listener: (...args: any[]) => void): void
```

### Usage

```js
alt.offClient('someEvent', someCallbackFunction);
```

### Real World Example

```js
function someCallbackFunction(player, someArg) {
    console.log(`${player.name} has called this function.`);
    alt.offClient('someEvent', someCallbackFunction);
}

alt.onClient('someEvent', someCallbackFunction);
```

_These examples assume you have imported `alt` from `alt-server`._