---
title: 'alt.setInterval'
description: 'Clears a timer set with the setInterval function.'
prefix: '[Client]'
---

# alt.setInterval

Used to create a timer that will trigger a function every `x` amount of milliseconds. In the usage example the function is being triggered every `5000ms`.

The callback function is **not** immediately invoked. Meaning you have to wait `x` amount of milliseconds for the first call of the function.

Returns a `number` reference which can be used to clear the interval.

### Declaration

```typescript
alt.setInterval(handler: (...args: any[]) => void, miliseconds: number): number
```

### Usage

```js
alt.setInterval(someCallbackFunction, 5000);
```

### Real World Example

```js
function someCallbackFunction() {
     alt.log('Timer Says Hello!');
}

alt.setInterval(someCallbackFunction);
```

_These examples assume you have imported `alt` from `alt-client`._