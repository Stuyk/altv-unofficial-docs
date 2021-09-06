---
title: 'Portal Coordinates'
description: 'Coordinates for portals and how to define them.'
prefix: '[Mapping]'
---

# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Calculating Door Dimensions](#calculating-door-dimensions)
  - [Manual BBMin & BBMax (Bounding Box)](#manual-bbmin--bbmax-bounding-box)
    - [The Decimal Rule](#the-decimal-rule)
  - [YTYP Generator](#ytyp-generator)
    - [Instructions](#instructions)
    - [Result](#result)

## Calculating Door Dimensions

Portals are created by reading the coordinates of your door frame in 3ds
max using the vertex option. All portal coordinates must have 8
placement points after the decimal. In order to see these coordinates
you must have selection mode activated in 3ds max.

![](media\image28.png)

Ie. 5.00000000

Coordinates follow a counter-clockwise pattern. Here's a reference.

Bottom right, top right, top left, bottom left

![](media\image9.png)

## Manual BBMin & BBMax (Bounding Box)

If you want a simple way to figure this out in 3Ds Max. You use the
green arrow to determine your most northern point. BBMin && BBMax is
basically a cuboid. You get two points. Lower most bottom left. Upper
most top right.

Sometimes bbmin and bbmax must be higher then the
realistic count it only happens in/near sandy shores.

### The Decimal Rule

The decimal rule from portals applies here. You must have the correct amount of trailing zeros for this to work.

If your decimal point is `0.0000000` it will not work. It must have the correct amount of trailing decimals which is `0.00000000`.

Here's an example image:

![](media\image26.png)

## YTYP Generator

Download Skylumz's YTYP Generator, where you simply can calculate the
BB's by importing your models:

[https://www.gta5-mods.com/tools/ytyp-generator-using-odrs](https://www.gta5-mods.com/tools/ytyp-generator-using-odrs)

### Instructions

1.  Extract the folder

2.  Open CreateYtyp.exe

3.  Click on "Ytyp Creator"

![](media\image2.png)

4.  Click on "Odr Browser" =\> "Open"

![](media\image21.png)

5.  Another window is popping up =\> Click "Open"

![](media\image16.png)

6.  Search for your Odr and double click on it

![](media\image25.png)

7.  Now you will see a lot of stuff in there

![](media\image6.png)

8.  Calculate BB's

![](media\image19.png)

9.  Close the window and click on Odr Browser =\> Import BB's

![](media\image31.png)

10.  Modify Flags, HD Texture Dist and LOD Dist

![](media\image18.png)

11.  If you use embedded collsisions, click on "Embedded Collision"

12.  If you use an external Texture Dictionary, click on "Using External Texture Dictionary" and insert the name

13.   If you are using a custom drawable dictionary, click on "Using Custom Drawable Dictionary"

14.   Click "Add Item"

![](media\image29.png)

15.  Click on "Create"

16.  Done, Click on "View Created Ytyp"

### Result

![](media\image8.png)