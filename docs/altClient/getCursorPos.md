---
title: 'alt.getCursorPos'
description: 'Gets the current position of the cursor.'
prefix: '[Client]'
---

# alt.getCursorPos

Used to get the current CEF based position of the cursor on-screen. The cursor does not have to be shown in order to see the current position of the cursor.

The cursor position is based on the native screen resolution of the client. Meaning that if you have a `1920 x 1080` screen it uses those values.

There is a function below to convert from the current value to a percentage based value.

### Declaration

```typescript
alt.getCursorPos(): { x: number, y: number }
```

### Usage

```js
const cursorPos = alt.getCursorPos();
```

### Real World Example

```js
const cursorPos = alt.getCursorPos();

alt.setInterval(() => {
    alt.log(JSON.stringify(cursorPos));
}, 1000);
```

### Getting GTA:V Screen Position

When you use drawText, drawRect, etc. you use these absolute values that are between `0.0` and `1.0` which is a percentage of the screen.

You can convert the values by using this function:

```js
function getAbsoluteCursor() {
    const cursor = alt.getCursorPos();
    const [_nothing, _x, _y] = native.getActiveScreenResolution(0, 0);
    return {
        x: cursor.x / _x,
        y: cursor.y / _y
    };
}
```

_These examples assume you have imported `alt` from `alt-client`._