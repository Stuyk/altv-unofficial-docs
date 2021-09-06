---
title: 'alt.isConsoleOpen'
description: 'Returns if the console is open or not.'
prefix: '[Client]'
---

# alt.isConsoleOpen

Returns whether or not the `F8` console is open for the client or not.

Returns a `boolean`. (true / false)

### Declaration

```typescript
isConsoleOpen(): boolean
```

### Usage

```js
alt.isConsoleOpen();
```

### Real World Example

```js
const result = alt.isConsoleOpen();
alt.log(result);
```

_These examples assume you have imported `alt` from `alt-client`._