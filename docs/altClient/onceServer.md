---
title: 'alt.onceServer'
description: 'Subscribes to server event with specified listener, which only triggers once.'
prefix: '[Client]'
---

# alt.onceServer

Subscribes to server event with specified listener, which only triggers once. Once the event is triggered it can never be triggered again.

This event specifically is only triggered once from something on `server-side`.

Basically called when you execute `alt.emitClient`.

### Declaration

```typescript
alt.onceServer(eventName: string, listener: (...args: any[]) => void): void
```

### Usage

```js
alt.onceServer('someEvent', someCallbackFunction);
```

### Real World Example

```js
alt.onceServer('someEvent', (player, args) => {
    alt.log(args)
}
```

_These examples assume you have imported `alt` from `alt-client`._