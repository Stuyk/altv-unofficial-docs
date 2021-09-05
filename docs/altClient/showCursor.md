---
title: 'alt.showCursor'
description: 'Sets if a cursor is visible or not. Based on CEF.'
prefix: '[Client]'
---

# alt.showCursor

Shows a cursor on screen based on WebViews / CEF. However, it does not automatically focus a WebView and internally it just increments a number of cursors to show.

_It's really dumb and you should use the alternative implementation below for handling a cursor_

### Declaration

```typescript
alt.showCursor(state: boolean): void
```

### Usage

```js
alt.showCursor(true);
```

### Real World Example

```js
alt.showCursor(true);
```

### Alternative Implementation

Use this iteration of showCursor to have a single instance of a cursor.

```js
let _cursorCount = 0;

export function showCursor(state: boolean) {
        if (state) {
            _cursorCount += 1;
            try {
                alt.showCursor(true);
            } catch (err) {}
        } else {
            for (let i = 0; i < _cursorCount; i++) {
                try {
                    alt.showCursor(false);
                } catch (err) {}
            }

            _cursorCount = 0;
        }
}
```

_These examples assume you have imported `alt` from `alt-client`._