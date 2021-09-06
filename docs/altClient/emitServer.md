---
title: 'alt.emitServer'
description: 'Emits specified event to server from the client.'
prefix: '[Client]'
---

# alt.emitServer

Used to emit an event that the server will receive. The client is responsible for triggering this event based on whatever criteria is written.

### Declaration

```typescript
alt.emitServer(eventName: string, ...args: any[]): void
```

### Usage

```js
alt.emitServer('customEventName', 'hello', 'world');
```

## Example

```js
alt.emitServer('customEventName', 'hello', 'world');
```

### Retrieving the Event on Server Side

When an emitServer is sent from the player the server-side can retrieve this event by using the `onClient` function from `alt`.

Example being...

```js
alt.onClient('customEventName', (player, arg1, arg2, etc) => {
    console.log(arg1); // Prints 'hello' from the above example.
});
```

_These examples assume you have imported `alt` from `alt-client`._