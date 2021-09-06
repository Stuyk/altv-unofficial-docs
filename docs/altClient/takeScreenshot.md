---
title: 'alt.takeScreenshot'
description: 'Takes a screenshot of the GTA:V window, including webviews.'
prefix: '[Client]'
---

# alt.takeScreenshot

Will only take a screenshot if screenshot permissions are enabled when the player joins the server.

There is a small **caveat** with using this function. When a screenshot is created it will be **very large** and dependent on the user's screen size. When you emit the sreenshot to a server it may be too large. You will need to split the screenshot into multiple strings to get a complete screenshot.

### Declaration

```typescript
alt.takeScreenshot(): Promise<string>
```

### Usage

```js
const result = await alt.takeScreenshot(true);
```

### Real World Example

```js
async function takeScreenshot() {
    const base64string = await alt.takeScreenshot();
    return base64string;
}

takeScreenshot().then(res => {
    alt.emitServer('screenshot', res);
});
```

_These examples assume you have imported `alt` from `alt-client`._