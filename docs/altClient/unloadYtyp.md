---
title: 'alt.unloadYtyp'
description: 'Used to unload a ytyp file for mapping.'
prefix: '[Client]'
---

# alt.unloadYtyp

Used to unload a ytyp file for mapping or from mapping.

Returns a `boolean`. (true / false)

### Declaration

```typescript
alt.unloadYtyp(path: string): boolean
```

### Usage

```js
alt.unloadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")
```

### Real World Example

```js
const didUnload = alt.unloadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")

if (didUnload) {
    console.log('Unloaded whatever ytyp file');
}

```

_These examples assume you have imported `alt` from `alt-client`._