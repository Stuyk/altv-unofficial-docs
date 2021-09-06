---
title: 'alt.offServer'
description: 'Removes the subscription to a server event.'
prefix: '[Server]'
---

# alt.offServer

Used to stop listening to built-in events from the server. Meaning that this turns off a function where a server triggers a client-side event.

### Declaration

```typescript
alt.offServer(eventName: string, listener: (...args: any[]) => void): void
```

### Usage

```js
alt.offServer('someEvent', someCallbackFunction);
```

### Real World Example

```js
function someCallbackFunction(player, someArg) {
    alt.offServer('someEvent', someCallbackFunction);
}

alt.onServer('someEvent', someCallbackFunction);
```

_These examples assume you have imported `alt` from `alt-client`._