---
title: 'alt.setPassword'
description: 'Change the server password at runtime.'
prefix: '[Server]'
---

# alt.setPassword

Used to set a password on the server that will prevent players from joining who do not know the password.


### Declaration

```typescript
alt.setPassword(password: string): void
```

### Usage

```js
alt.setPassword('VerySecure123');
```

### Real World Example

```js
alt.setPassword('VerySecure123');
```

_These examples assume you have imported `alt` from `alt-server`._