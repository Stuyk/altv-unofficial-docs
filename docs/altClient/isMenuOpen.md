---
title: 'alt.isMenuOpen'
description: 'Used to check if the console or user interface is open.'
prefix: '[Client]'
---

# alt.isMenuOpen

Used to check if the console or user interface is open.

Returns a `boolean`. (true / false)

### Declaration

```typescript
alt.isMenuOpen(): boolean
```

### Usage

```js
const result = alt.isMenuOpen();
```

### Real World Example

```js
const result = alt.isMenuOpen();

if (result) {
    console.log(`Menu is open!`);
} else {
    console.log(`Menu is not open.`);
}

```

_These examples assume you have imported `alt` from `alt-client`._