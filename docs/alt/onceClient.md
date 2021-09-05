---
title: 'alt.onceClient'
description: 'Subscribes to client event with specified listener, which only triggers once.'
prefix: '[Server]'
---

# alt.onceClient

Subscribes to server event with specified listener, which only triggers once. Once the event is triggered it can never be triggered again.

This event specifically is only triggered once from some player on `client-side`.

First `argument` in the function will always be a `Player`.

### Declaration

```typescript
alt.onceClient(eventName: string, listener: (player: Player, ...args: any[]) => void): void
```

### Usage

```js
alt.onceClient('someEvent', someCallbackFunction);
```

### Real World Example

```js
alt.onceClient('someEvent', (player, args) => {
    alt.log(args)
}
```

_These examples assume you have imported `alt` from `alt-server`._