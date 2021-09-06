---
title: 'Mapping Tips'
description: 'Useful tips for mapping while using 3DS Max and GTA:V.'
prefix: '[Mapping]'
---

# Mapping Tips

These tips were written by SLB. Hopefully you find them useful.

- [Mapping Tips](#mapping-tips)
  - [Use Planes/Flats Not Cubes](#use-planesflats-not-cubes)
  - [Welding](#welding)
  - [GTA Poly Limitations](#gta-poly-limitations)
  - [Best Texture Combination for Models/Shells](#best-texture-combination-for-modelsshells)
  - [Textures, LOD, and Quality](#textures-lod-and-quality)
  - [UVW Wrapping in Seconds](#uvw-wrapping-in-seconds)
  - [Useful Shortcuts](#useful-shortcuts)
  - [Snap Settings](#snap-settings)
  - [Cutting / Slicing](#cutting--slicing)
    - [Result](#result)

## Use Planes/Flats Not Cubes

Work in flats and not cubes. GTA only needs one side of the model. Fuck
the rest.

![](media\image13.png)

This is a flat/plane:

![](media\image30.png)

This is a cube:

![](media\image3.png)

## Welding

Weld all Vertices Together. Period.

Interestingly enough, welding is something I picked up from GTA:SA.
Player models would look like shit if I didn't weld my vertices
together.

Leaving a vertex unwelded can cause errors like daylight on chrome, fog
in building, extreme speculation of textures, etc.

## GTA Poly Limitations

Do Not Exceed 24,000 Vertexes/Polys

You can see this limit by pressing 7 in 3Ds Max

## Best Texture Combination for Models/Shells

The best shader for textures is normal / normal_spec when you are
creating a shell or a model.

## Textures, LOD, and Quality

When setting the distance or LOD for your model; there is a maximum
value of 400. Maxing it to 400 can generally cause performance drops.
MrBrown recommends around **30 LOD** for most high definition textures.
Generally keep the distance at which the interiors can render these
textures pretty small.

## UVW Wrapping in Seconds

Instead of unwrapping uvw and doing it yourself. There's a simple method
SLB mentions. Just Use the regular UVW Map modifier from the list.

Rockstar generally uses 2.5 for length, width, and height with the box
mapping.

![](media\image22.png)

Perfect wrap every time.

## Useful Shortcuts

ALT + W - Fullsize Viewport ( best option to work)

ALT + SCROLL WHEEL - Change Steps for Zoom (Slower or Faster)

Z - Isolate the object you're looking at.

T - Top View

## Snap Settings

Useful for keeping your models clean and organized.

![](media\image20.png)

![](media\image4.png)

## Cutting / Slicing

If you want to cut a model into many pieces, use slice plane while
selecting the face in subpoly mode. It's saving a lot of time and the
cut tool is not working properly in 2016.

1.  Go to Editable Poly

2.  Go to polygon mode

3.  Select the face you want to cut

4.  Click on slice plane

5.  Adjust the Yellow Square by rotating and moving (angle rotation snap
    > recommended)

6.  Click on slice

7.  Finish!

Short reminder: You can slice the whole object by pressing CTRL A while
in Polygon mode, or selecting the faces with Ring / Loop

![](media\image12.png)

![](media\image23.png)

### Result

![](media\image14.png)