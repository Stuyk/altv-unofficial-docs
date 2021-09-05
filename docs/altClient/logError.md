---
title: 'alt.logError'
description: 'Logs the specified arguments as an error to the console.'
prefix: '[Client]'
---

# alt.logError

Used to log an error in console. It should display with red text.

If you get `[Object object]` then you should wrap the content inside of the log with `JSON.stringify(someVariable, null, '\t')`.

### Declaration

```typescript
alt.logError(...args: any[]): void
```

### Usage

```js
alt.logError('something');
```

### Real World Example

```js
alt.logError('This console log is red in the console!');
```


_These examples assume you have imported `alt` from `alt-client`._