---
title: 'alt.rootDir'
description: 'Used to get the full root directory of the resource that this is called inside of.'
prefix: '[Server]'
---

# alt.rootDir

Used to get the full root directory of the resource that this is called inside of.

Useful for writing content to the server specific resource folder if necessary.

Returns a `string`.

### Declaration

```typescript
alt.rootDir: string
```

### Usage

```js
const directory = alt.rootDir;
```

### Real World Example

```js
import * as fs from 'fs';
import * as path from 'path';

const directory = alt.rootDir;
const textFilePath = path.join(directory, 'test.txt');

fs.appendFileSync(textFilePath, 'hello world');
```

_These examples assume you have imported `alt` from `alt-server`._