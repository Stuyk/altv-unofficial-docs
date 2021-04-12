---
title: 'Connecting 2 MLOs'
description: 'How to connect 2 MLOs together for GTA:V.'
prefix: '[Mapping]'
---

# Connect 2 MLOs

MLO's are a wonderful, but complex method to create interiors.
Unfortunately, there is a limit for portals for MLO's, so if you want to
create a bigger interior, you have to separate these MLO's to connect
them.

Requirements to understand this:

1.  Knowledge in how to create a MLO Ytyp itself

2.  Knowledge in how to create a YMAP for your MLO

So to create a big MLO and connect 2 together, you need the following:

1.  A Ytyp with 2 or more MLO archetype definitions

2.  Separated Ymaps

The clue about connecting 2 MLO's is to use the flag 8266 for your
portals. You have to have the same position for you portals (like copy
the portal) but those 2 need to be in an opposite direction. Let me give
you an example.

![](media\image10.png)

Here you can see 2 rooms (which should define the 2 separated MLO's)

What you have to do is get the Portal in between

![](media\image1.png)

1 Portal for MLO 1

Room To = 0

Room From is your own room from MLO 1

Room Flag = 8266

![](media\image33.png)

1 Portal for MLO 2

Room To = 0

Room From is your own room from MLO 2

Room Flag = 8266

Thats all!
