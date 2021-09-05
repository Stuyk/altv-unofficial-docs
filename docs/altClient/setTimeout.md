---
title: 'alt.setTimeout'
description: 'Clears a timer set with the setTimeout function.'
prefix: '[Client]'
---

# alt.setTimeout

Used to create a single use function that will trigger a function after `x` amount of milliseconds. In the usage example the function is being triggered after `5000ms`.

Returns a `number` reference which can be used to clear the timeout.

### Declaration

```typescript
alt.setTimeout(handler: (...args: any[]) => void, miliseconds: number): number
```

### Usage

```js
alt.setTimeout(someCallbackFunction, 5000);
```

### Real World Example

```js
const x = alt.setTimeout(() => {
    alt.log('Client Says Hello!');
}, 5000);
```

_These examples assume you have imported `alt` from `alt-client`._