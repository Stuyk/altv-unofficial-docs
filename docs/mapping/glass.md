---
title: 'Glass for MLOs'
description: 'How to create glass for MLOs'
prefix: '[Mapping]'
---

# Glass

Malcom reached out after asking the question and provided a bit of
information regarding glass and such. When you're setting up your
material in GIMS Evo here's what he recommends.

**Vertex Color Recommendation:** YELLOW

This is recommended because it looks good at all hours.

```
Shader: Glass

Parameter Set: glass_pv_env
```

## Texture for Glass

[https://drive.google.com/open?id=1K4av0YGFoLxqD6GXqxrLj_7cnyMizbiS](https://drive.google.com/open?id=1K4av0YGFoLxqD6GXqxrLj_7cnyMizbiS)

If that link above somehow manages to expire. It's basically a gray .dds
file with a 10% alpha channel.


## Continued...

In that same texture box you should set these parameters:

```
Type: Regular

Pixel Format: A8R8G8B8

Usage: Unknown
```

There are also a handful of boxes below this one that have sliders.

You won't have to change these too much.

Probably only change `Specular Intensity` to `0.8`.

Mess with these for different effects.

Should look like this if you have lighting setup in your 3DS Max instance.

## Example

![](media\image5.png)