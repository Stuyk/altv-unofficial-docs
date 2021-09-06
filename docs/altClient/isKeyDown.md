---
title: 'alt.isKeyDown'
description: 'Used to check if a JavaScript key code is currently down or not.'
prefix: '[Client]'
---

# alt.isKeyDown

Used to check if a JavaScript key code is currently down or not.

Use a website like [keycode.info](http://keycode.info/) to determine different key values.

Alternatively you can use this example to get the value.

```js
const keyValue = 'k'.charCodeAt(0);
```

Returns a `boolean`. (true / false)

### Declaration

```typescript
isKeyDown(key: number): boolean
```

### Usage

```js
alt.isKeyDown(25);
```

### Real World Example

```js
const keyValue = 'k'.charCodeAt(0);
const result = alt.isKeyDown(keyValue);

if (result) {
    console.log(`Pressed!`);
} else {
    console.log(`Not Pressed`);
}

```

_These examples assume you have imported `alt` from `alt-client`._