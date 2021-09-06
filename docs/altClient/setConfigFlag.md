---
title: 'alt.setConfigFlag'
description: 'Used to set the current value of a configuration flag.'
prefix: '[Client]'
---

# alt.setConfigFlag

Used to set the current value of a configuration flag.

**Valid Flags**

```
DISABLE_AUTO_WEAPON_SWAP
DISABLE_PED_PROP_KNOCK_OFF
```

### Declaration

```typescript
alt.setConfigFlag(flag: string, state: boolean): void
```

### Usage

```js
alt.setConfigFlag('DISABLE_AUTO_WEAPON_SWAP', true);
```

### Real World Example

```js
alt.setConfigFlag('DISABLE_AUTO_WEAPON_SWAP');
```

_These examples assume you have imported `alt` from `alt-client`._