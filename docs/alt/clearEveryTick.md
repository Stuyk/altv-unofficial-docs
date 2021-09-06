---
title: 'alt.clearEveryTick'
description: 'Clears a timer set with the everyTick function.'
prefix: '[Server]'
---

# alt.clearEveryTick

Clears a timer set with the everyTick function. 

See [alt.everyTick](everyTick.md) for more information.

### Declaration

```typescript
alt.clearEveryTick(id: number): void
```

### Usage
```js
alt.clearEveryTick(someEveryTick);
```

### Real World Example

```js
const someEveryTick = alt.everyTick(() => {
    console.log('Lots of Logging');
});

alt.clearEveryTick(someEveryTick);
```

_These examples assume you have imported `alt` from `alt-server`._
