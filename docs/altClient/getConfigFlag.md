---
title: 'alt.getConfigFlag'
description: 'Returns a boolean of whether or not a config flag is enabled.'
prefix: '[Client]'
---

# alt.getConfigFlag

Used to get the current value of a configuration flag which is used to determine whether or not it is currently enabled.

**Valid Flags**

```
DISABLE_AUTO_WEAPON_SWAP
DISABLE_PED_PROP_KNOCK_OFF
```

Returns a `boolean` (true / false)

### Declaration

```typescript
alt.getConfigFlag(flag: string): boolean
```

### Usage

```js
const result = alt.getConfigFlag('DISABLE_AUTO_WEAPON_SWAP');
```

### Real World Example

```js
const isEnabled = alt.getConfigFlag('DISABLE_AUTO_WEAPON_SWAP');

if (isEnabled) {
    alt.log('Disabling weapon swap is currently enabled.');
}
```

_These examples assume you have imported `alt` from `alt-client`._