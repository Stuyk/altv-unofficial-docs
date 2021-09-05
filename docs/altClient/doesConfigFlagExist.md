---
title: 'alt.doesConfigFlagExist'
description: 'Returns whether the specified config flag exists.'
prefix: '[Client]'
---

# alt.doesConfigFlagExist

There is no concise information about how to use this function. It's likely used for checking if a parameter is set in the local configuration for the client.

Returns a `boolean` if the configuration is set on the client.

Valid Flags:

```
DISABLE_AUTO_WEAPON_SWAP
DISABLE_PED_PROP_KNOCK_OFF
```

### Declaration

```typescript
alt.doesConfigFlagExist(flag: string): boolean
```

### Usage

```js
alt.doesConfigFlagExist(someTimeoutValue);
```

### Real World Example

```js
const flag = alt.doesConfigFlagExist('DISABLE_AUTO_WEAPON_SWAP');
alt.log(flag);
```

_These examples assume you have imported `alt` from `alt-client`._