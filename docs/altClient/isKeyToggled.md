---
title: 'alt.isKeyToggled'
description: 'Used to check if a JavaScript key code is currently toggled.'
prefix: '[Client]'
---

# alt.isKeyToggled

Used to check if a JavaScript key code is currently toggled.

Use a website like [keycode.info](http://keycode.info/) to determine different key values.

If the key is toggled on it would be `true`.

Returns a `boolean`. (true / false)

### Declaration

```typescript
alt.isKeyToggled(key: number): boolean
```

### Usage

```js
alt.isKeyToggled(20); // Caps Lock
```

### Real World Example

```js
const result = alt.isKeyToggled(20); // Caps Lock

if (result) {
    console.log(`Caps Lock is Enabled!`);
} else {
    console.log(`Caps Lock is Not Enabled`);
}

```

_These examples assume you have imported `alt` from `alt-client`._