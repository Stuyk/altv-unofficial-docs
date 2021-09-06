---
title: 'alt.getLocale'
description: 'Returns the letter representation of the locale used by the client.'
prefix: '[Client]'
---

# alt.getLocale

This will return the letter representation of the locale used by the client.

ie. `en, de, fr`

Returns a `string`;

### Declaration

```typescript
alt.getLocale(): string
```

### Usage

```js
const result = alt.getLocale();
```

### Real World Example

```js
const result = alt.getLocale();
console.log(result);
```

_These examples assume you have imported `alt` from `alt-client`._