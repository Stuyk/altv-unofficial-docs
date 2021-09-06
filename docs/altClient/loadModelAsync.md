---
title: 'alt.loadModelAsync'
description: 'Used to load a model based on hash in an asynchronous manner.'
prefix: '[Client]'
---

# alt.loadModelAsync

Used to load a model based on hash in an asynchronous manner. Best when used in tandem with `alt.hash`.

### Declaration

```typescript
alt.loadModelAsync(modelHash: number): Promise<void>
```

### Usage

```js
alt.loadModelAsync(someModelHash);
```

### Real World Example

```js
async function loadTheModel(hash: number) {
    await alt.loadModelAsync(hash);
}

loadTheModel(alt.hash('cheetah')).then(res => {
    console.log('Loaded the model!');
});
```

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