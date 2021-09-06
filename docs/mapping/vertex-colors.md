---
title: 'Vertex Colors'
description: 'Vertex Colors while creating an MLO.'
prefix: '[Mapping]'
---

# Vertex Colors for Lighting

You will need to tweak your vertex colors to find something that will work for you. There is a general recommendation at the bottom and some additional information about each color channel below.

## Tint Palettes

If you see any textures which are using tint palettes and you are
wondering how they can have a different color than the texture itself it
is due to vertex colors. Just use the vertex color modifier and change
it.

## Red
Will control ambient occlusion of the model during night, most (except
for night lights) will have it topped to 255 so it gets very dark when
night falls.

## Green

Artificial light, topping this to 255 will give a self emissive power to
the object. Used for objects near to lamposts or light sources to
simulate ambiental lightning

## Blue

Moonlight illumination, how much the object reflects off the moonlight.
Rockstar uses this at very frequent situations to avoid a fully dark
atmosphere

## Recommendation

For a medium lit interior you should use...

```
R: 0
G: 140
B: 0
```

_Dark#8924 says this should be a good starting point for interiors._

## Example

![](media\image15.png)