---
title: 'alt.clearInterval'
description: 'Clears a timer set with the setInterval function.'
prefix: '[Server]'
---

# alt.clearInterval

Used to stop an interval from executing the logic inside of it.

See [alt.setInterval](setInterval.md) for more information.

### Declaration

```typescript
alt.clearInterval(id: number): void
```

### Usage

```js
alt.clearInterval(someIntervalValue);
```

### Real World Example

```js
const someIntervalValue = alt.setInterval(() => {
    alt.log('Client Says Hello!');
}, 5000);

alt.clearInterval(someIntervalValue);
```

_These examples assume you have imported `alt` from `alt-server`._