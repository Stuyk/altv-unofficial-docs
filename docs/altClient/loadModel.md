---
title: 'alt.loadModel'
description: 'Used to load a model based on hash.'
prefix: '[Client]'
---

# alt.loadModel

Used to load a model based on hash. Best when used in tandem with `alt.hash`.

### Declaration

```typescript
alt.loadModel(modelHash: number): void
```

### Usage

```js
alt.loadModel(someModelHash);
```

### Real World Example

```js
const someModelHash = alt.hash('cheetah');
alt.loadModel(hash);
```

_You should definitely use async for loading models and spawning objects, you want to ensure that the model is loaded before creating the object_

### Alternative Implementation

Personally, I have had issues with use alt.loadModel so I've opted for using natives for loading models. Here's a raw implementation using natives.

```js

export async function loadModel(hash: number): Promise<boolean> {
    return await new Promise((resolve: Function) => {
        native.requestModel(hash);
        let count = 0;

        if (native.hasModelLoaded(hash)) {
            resolve(true);
            return;
        }

        const interval = alt.setInterval(() => {
            if (count >= 100) {
                resolve(false);
                alt.clearInterval(interval);
                return;
            }

            if (!native.hasModelLoaded(hash)) {
                count += 1;
                return;
            }

            alt.clearInterval(interval);
            resolve(true);
        }, 100);
    });
}
```

_These examples assume you have imported `alt` from `alt-client`._