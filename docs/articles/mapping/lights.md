---
title: 'Creating MLO / Interior Lights'
description: 'Creating MLO lights and understanding them...'
prefix: '[Mapping]'
---

# Creating MLO / Interior Lights

Lights aren't really explained but here's what I've gathered from
working with lights. Lights can be created through the GIMS Evo menu.

Create Object \> Models \> Light

**All lights should be exported SEPARATELY from your model.**

**Meaning DO NOT attach them to your model.**

Placing lights inside of your model and attaching them will cause bad
behavior.

Thanks Ultrunz\#9078 for this info.

You can also view your lights in 3DS max by changing a few settings.

Set your viewport to realistic.

![](media\image32.png)

Then go to **CONFIGURE**.

Turn the Lighting and Shadows Quality to 16x. Should fix all render
issues.

Here's an example of some light settings: (From Default Creation)

```ts

Type: Spot

Intensity: 2

InnerAngle: 90

OuterAngle: 125

Corona: 0 on all of it.

Flags: 8, 9, 11, 18

TimeFlags: 1 - 24 (24/7 Lights)

```

![](media\image11.png)