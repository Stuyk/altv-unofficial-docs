---
title: 'alt.nextTick'
description: 'Schedules execution of handler on next tick.'
prefix: '[Server]'
---

# alt.nextTick

Used to wait for a single tick to pass on the server-side before executing the logic inside of the callback function.

Returns a `number` which can be used to clear the nextTick event if it has not been executed yet.

### Declaration

```typescript
alt.nextTick(handler: (...args: any[]) => void): number
```

### Usage

```js
alt.nextTick(someCallbackFunction);
```

### Real World Example

```js
function someCallbackFunction() {
    alt.log('This was executed');
}

const someTick = alt.nextTick(someCallbackFunction);
```

_These examples assume you have imported `alt` from `alt-server`._