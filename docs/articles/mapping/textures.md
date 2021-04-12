---
title: 'MLO Texture Information'
description: 'Information on using textures in your MLO.'
prefix: '[Mapping]'
---

# Textures

If you want to make your life easy just export textures from \`.ytd\`
files and use those. They're native GTA:V textures and you can simply
embed them into your model. It will save you a ton of time and make it
very easy on yourself.

Otherwise use NVIDIAs DDS tools for photoshop to make your own.

[https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop)

`DXT5` is probably the format you want to export in.

Here's a few things about textures that you should know...

* They're meant to scale to the `power of 2`.

    * 16x16, 32x32, 64x64, 128x128, 256x256, etc.

* SLB2k11 says not to do anything over `512x512`. It's unreasonable.

## Splitting Up Textures

Try **not** to embed all your textures on the model. Instead
you should try to split into a .ytd file to keep track of your textures.
You can choose the option not to embed a texture in your model. Inside
of your **ytyp** file you can add an entry for **textureDictionary**.

## Texture Colors Guide

Here's a guide that covers specular textures and vertex colors.

![](media\image7.png)

## Glowing Characters

The general fix is that in 3DS Max you go to your modifier list for your
model. _Thanks Tarkayne_

### General Instructions

* Go down to Edit Normals. 
* Select all of the normals. Can be done
with Ctrl+A while Edit Normals is highlighted. 
* Press Unify.
* Collapse To when complete.

### Result

![](media\image24.png)

