---
title: 'alt.off'
description: 'Used to stop listening to an on event bound to a specific callback function.'
prefix: '[Server]'
---

# alt.on

Used to stop listening to built-in events when a player joins, leaves, enters a vehicle, dies, etc. or custom events.

See the [server event list](../articles/server/server-events.md) for additional examples.

### Declaration

```typescript
alt.off(eventName: string, listener: (...args: any[]) => void): void
```

### Usage

```js
alt.off('someEventName', someCallbackFunction);
```

### Real World Example

This example shows that an event will automatically turn itself off after the first call.

```js
function someCallbackFunction() {
    alt.off('someEventName', someCallbackFunction);
}

alt.on('someEventName', someCallbackFunction);
```

_These examples assume you have imported `alt` from `alt-server`._
