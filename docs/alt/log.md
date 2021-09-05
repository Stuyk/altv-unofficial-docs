---
title: 'alt.log'
description: 'Logs the specified arguments as an error to the console.'
prefix: '[Server]'
---

# alt.log

Used to log a string, object, number, or pretty much anything to the console. 

If you get `[Object object]` then you should wrap the content inside of the log with `JSON.stringify(someVariable, null, '\t')`.

### Declaration

```typescript
alt.log(...args: any[]): void
```

### Usage

```js
alt.log('Hello World');
```

### Real World Example

```js
alt.log('This console log is white in the console!');
```

_These examples assume you have imported `alt` from `alt-server`._