---
title: 'alt.emit'
description: 'Used to emit from one resource to another or the same resource.'
prefix: '[Server]'
---

# alt.emit

`alt.emit` will emit an event across multiple resources or a single resource. 

An event being a similar to calling a function by the name given in its first parameter.

An emit event can only be recieved if there is an `on` event paired with a similar name.

Any amount of parameters or variables may be passed through an emit event.

### Declaration

```typescript
alt.emit(eventName: string, ...args: any[]): void
```

### Usage
```js
alt.emit('customEventName', 'hello', 'world');
```

## Example

```js
alt.on('customEventName', (arg1, arg2) => {
    console.log(`${arg1} ${arg2}`);
    // Prints 'hello world'
});

alt.emit('customEventName', 'hello', 'world');
```

_These examples assume you have imported `alt` from `alt-server`._