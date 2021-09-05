---
title: 'alt.everyTick'
description: 'Schedules execution of handler on every frame.'
prefix: '[Server]'
---

# alt.everyTick

A very heavy event loop that is triggered roughly every 1-2ms. Meaning that it will absolutely obliterate your console if you log something inside of it.

Best practice is to not use this on server-side unless it makes sense for your game mode. In most cases this is not true.

### Declaration

```typescript
alt.everyTick(handler: (...args: any[]) => void): number
```

### Usage

```js
alt.everyTick(someCallbackFunction)
```

### Real World Example

```js
function someCallbackFunction() {
    console.log('Spamming Console');
}

alt.everyTick(someCallbackFunction);
```

_These examples assume you have imported `alt` from `alt-server`._