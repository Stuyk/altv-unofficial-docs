---
title: 'alt.setCursorPos'
description: 'Used to forcefully set the cursor position on screen.'
prefix: '[Client]'
---

# alt.setCursorPos

Used to forcefully set the cursor position on screen.


### Declaration

```typescript
alt.setCursorPos(pos: { x: number, y: number }): void
```

### Usage

```js
alt.setCursorPos({ x: 960, y: 540 });
```

### Real World Example

Sets the cursor position in the top left of a screen.

```js
alt.setCursorPos({ x: 0, y: 0 });
```

Sets the cursor position in the center of the screen.

```js
const [_nothing, _x, _y] = native.getActiveScreenResolution(0, 0);
alt.setCursorPos({ x: _x / 2, y: _y / 2 });
```

Sets the cursor position in the bottom right of the screen.

```js
const [_nothing, _x, _y] = native.getActiveScreenResolution(0, 0);
alt.setCursorPos({ x: _x, y: _y });
```

_These examples assume you have imported `alt` from `alt-client`._