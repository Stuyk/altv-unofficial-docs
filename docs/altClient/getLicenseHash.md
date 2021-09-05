---
title: 'alt.getLicenseHash'
description: 'Returns a hash of the GTA Installation License.'
prefix: '[Client]'
---

# alt.getLicenseHash

This will return a hash of the GTA Installation License.

Returns a `string` representation of the GTA:V license.

### Declaration

```typescript
alt.getLicenseHash(): string
```

### Usage

```js
const result = alt.getLicenseHash();
```

### Real World Example

```js
const result = alt.getLicenseHash();
console.log(result);
```

_These examples assume you have imported `alt` from `alt-client`._