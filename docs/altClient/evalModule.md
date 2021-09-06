---
title: 'alt.evalModule'
description: 'Used to execute JavaScript code.'
prefix: '[Client]'
---

# alt.evalModule

Used to execute JavaScript code that is written in string format. Useful when you want to execute some unique code that you want to pass down from server-side.

_Basically it's eval just renamed_

### Declaration

```typescript
alt.evalModule(code: string): Record<string, any>
```

### Usage

```js
const someResult = alt.evalModule("console.log('logged')");
```

## Example

```js
const someResult = alt.evalModule("console.log('logged')");

console.log(someResult);
```

_These examples assume you have imported `alt` from `alt-client`._