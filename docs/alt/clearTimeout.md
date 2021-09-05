---
title: 'alt.clearTimeout'
description: 'Clears a timer set with the setTimeout function.'
prefix: '[Server]'
---

# alt.clearTimeout

Used to clear a timeout early. If the timeout is cleared the code inside of the timeout is **never** executed.

See [alt.setTimeout](setTimeout.md) for more information.

### Declaration

```typescript
alt.clearTimeout(id: number): void
```

### Usage

```js
alt.clearTimeout(someTimeoutValue);
```

### Real World Example

```js
const someTimeoutValue = alt.setTimeout(() => {
    alt.log('Client Says Hello!');
}, 5000);

alt.clearTimeout(someTimeoutValue);
```

_These examples assume you have imported `alt` from `alt-server`._