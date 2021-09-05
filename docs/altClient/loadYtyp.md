---
title: 'alt.loadYtyp'
description: 'Used to load a ytyp file for mapping.'
prefix: '[Client]'
---

# alt.loadYtyp

Used to load a ytyp file for mapping or from mapping.

Returns a `boolean`. (true / false)

### Declaration

```typescript
alt.loadYtyp(path: string): boolean
```

### Usage

```js
alt.loadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")
```

### Real World Example

```js
const didLoad = alt.loadYtyp("x64u.rpf/levels/gta5/_hills/country_06/country_06_metadata.rpf/cs6_08_interior_cs6_08_mine_int.ytyp")

if (didLoad) {
    console.log('Loaded whatever ytyp file');
}

```

_These examples assume you have imported `alt` from `alt-client`._