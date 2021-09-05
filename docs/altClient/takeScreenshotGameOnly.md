---
title: 'alt.takeScreenshotGameOnly'
description: 'Takes a screenshot of the raw GTA:V window, excludes webviews.'
prefix: '[Client]'
---

# alt.takeScreenshotGameOnly

Will only take a screenshot if screenshot permissions are enabled when the player joins the server. Excludes WebViews.

There is a small **caveat** with using this function. When a screenshot is created it will be **very large** and dependent on the user's screen size. When you emit the sreenshot to a server it may be too large. You will need to split the screenshot into multiple strings to get a complete screenshot.

### Declaration

```typescript
alt.takeScreenshotGameOnly(): Promise<string>
```

### Usage

```js
const result = await alt.takeScreenshotGameOnly(true);
```

### Real World Example

```js
async function takeScreenshotGameOnly() {
    const base64string = await alt.takeScreenshotGameOnly();
    return base64string;
}

takeScreenshotGameOnly().then(res => {
    alt.emitServer('screenshot', res);
});
```

_These examples assume you have imported `alt` from `alt-client`._