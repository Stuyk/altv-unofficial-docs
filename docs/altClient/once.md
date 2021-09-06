---
title: 'alt.once'
description: 'Subscribes to server event with specified listener. Triggers once.'
prefix: '[Client]'
---

# alt.once

Subscribes to a client event with specified listener, which only triggers once. Once the event is triggered it can never be triggered again.

### Declaration

```typescript
alt.once<K extends keyof IServerEvent>(eventName: K, listener: IServerEvent[K]): void
```

### Usage

```js
alt.once('someEvent', someCallbackFunction);
```

### Real World Example

```js
alt.once('someEvent', () => {
    alt.log(`Called once.`);
}

alt.emit('someEvent');
```

_These examples assume you have imported `alt` from `alt-client`._