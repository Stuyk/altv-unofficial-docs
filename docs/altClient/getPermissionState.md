---
title: 'alt.getPermissionState'
description: 'Returns the currnet permission state for permission type.'
prefix: '[Client]'
---

# alt.getPermissionState

Used to determine whether or not a permission is currently enabled for the alt:V client.

Uses a bitwise value to determine if a permission is enabled or not.

**Permission Types**

```
None = 0
ScreenCapture = 1
WebRTC = 2
All = 4
```

**Permission Results**

```
Allowed = 0
Denied = 1
Unspecified = 2
Failed = 4
```

Returns a `number`.

### Declaration

```typescript
alt.getPermissionState(): number
```

### Usage

```js
const result = getPermissionState();
```

### Real World Example

```js
const result = getPermissionState();
console.log(result);
```

_These examples assume you have imported `alt` from `alt-client`._