---
title: 'alt.on'
description: 'Used to emit from one resource to another or the same resource.'
prefix: '[Client]'
---

# alt.on

Used to listen to built-in events or custom events.

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
alt.on('someEventName', (someArgument) => {
    console.log('Got custom event!');
});
```

_These examples assume you have imported `alt` from `alt-client`._