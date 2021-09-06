---
title: 'alt.clearNextTick'
description: 'Clears a timer set with the nextTick function.'
prefix: '[Client]'
---

# alt.clearNextTick

Used to clear a nextTick event before it is ran. The logic inside of the nextTick event is never executed if cleared in time.

See [alt.nextTick](nextTick.md) for more information.

### Declaration

```typescript
alt.clearNextTick(id: number): void
```

### Usage

```js
alt.clearNextTick(someNextTick);
```

### Real World Example

```js
const someNextTick = alt.nextTick(() => {
    console.log('hello world');
});

alt.clearNextTick(someNextTick);
```

_These examples assume you have imported `alt` from `alt-client`._