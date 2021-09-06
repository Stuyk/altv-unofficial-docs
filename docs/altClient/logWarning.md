---
title: 'alt.logWarning'
description: 'Logs the specified arguments as a warning to the console.'
prefix: '[Client]'
---

# alt.logWarning

Used to log an error in console. It should display with yellow text.

If you get `[Object object]` then you should wrap the content inside of the log with `JSON.stringify(someVariable, null, '\t')`.

### Declaration

```typescript
alt.logWarning(...args: any[]): void
```

### Usage

```js
alt.logWarning('something');
```

### Real World Example

```js
alt.logWarning('This console log is yellow in the console!');
```

_These examples assume you have imported `alt` from `alt-client`._