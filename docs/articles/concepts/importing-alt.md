---
title: 'How to import alt:V packages'
description: 'Importing the types from the @altv npm packages for type auto completion.'
prefix: '[Server/Client]'
---

# alt

Used to import basic alt:V functionality for server-side or client-side.

# Install Types

You can use npm from command line to install these packages. Make sure you initialize your main directory with `npm init` first. Checkout the bootcamp if this doesn't make any sense to you.

```
npm install --save-dev @altv/types-server
npm install --save-dev @altv/types-client
npm install --save-dev @altv/types-natives
```

## Server Usage

```js
/// <reference types="@altv/types-server" />
// The above is only required if you're working in .js

import * as alt from 'alt-server'; // Server import can only be used server-side.
```

## Client Usage

```js
/// <reference types="@altv/types-client" />
// The above is only required if you're working in .js

import * as alt from 'alt-client'; // Client import can only be used client-side.
```