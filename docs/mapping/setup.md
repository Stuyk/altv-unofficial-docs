---
title: 'Mapping Setup'
description: 'Links that are useful for learning to map or create MLOs'
prefix: '[Mapping]'
---

# Setup

This is just my experience with handling all of these models and such. I
made a second copy of GTA:V and am specifically only modifying that one.
I handle my testing through CodeWalker and by copying the model files,
collisions, etc. over to alt:V.

For everyone else it can be a totally different experience but I'd just
recommend a second copy of GTA:V so you don't screw up your working
copy.

## OpenIV

Setup OpenIV so that it uses your second copy of GTA:V. 

This will prevent corruption of your game files and allow you to mod your game in
tandem with CodeWalker and get your models to load in CodeWalker.

_Get the download from [links](./links.md) section._

## CodeWalker

Setup CodeWalker so that it uses your second copy of GTA:V.

You can find pathing under options to select the correct version of GTA:V that you wish to use.

_Get the download from [links](./links.md) section._

### Loading Models in Code Walker

You need to have a very specific DLC setup. Below is a link to an .rpf
file that will have the setup that you need to achieve models loading in
CodeWalker. Also don't forget to tick enable mods and enable DLC as well
as select your DLC from the drop down menu.

![](media\image17.png)

### File Tree

Here's a file tree that shows all the files necessary for making an
interior. This can be seen inside of OpenIV.

```
└ mods/update/x64/dlcpacks                 
    └ dlc.rpf                                   
        ├   content.xml                               
        ├   setup2.xml                                
        └   object.rpf                                
            ├   MODELS / COLLISION FILES GO IN THIS RPF
            ├   your_model.ydr                            
            ├   your_model_collision.ybn                  
            ├   your_ytyp.ytyp                            
            ├   your_mlo.ymap                             
            └ \ _manifest.ymf                            
```

Here's a screenshot in OpenIV to help out.

![](media\image27.png)

Here's an .rpf file to help you figure it out:

[https://drive.google.com/open?id=1TDdpJ0ciTAF2\_-DKNewQc-9xBEDIboRX](https://drive.google.com/open?id=1TDdpJ0ciTAF2_-DKNewQc-9xBEDIboRX)

Once you have all the above setup. You need to load your dlc.

Adds the **dlclist.xml** file to your mods folder via search menu.

Path is: `/update/x64/update.rpf/common/data`

Append your dlc name to the .xml file under mods to get it to load.

**Example**

If you need examples of **content.xml** and **setup2.xml** here's some
gists.

```xml
  <Item>dlcpacks:/stuyk/</Item>
  <Item>dlcpacks:/paletobar/</Item>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CDataFileMgr__ContentsOfDataFileXml>
	<disabledFiles />
	<includedXmlFiles />
	<includedDataFiles />
	<dataFiles>
		<Item>
			<filename>dlc_stuyk:/objects.rpf</filename>
			<fileType>RPF_FILE</fileType>
			<overlay value="false" />
			<disabled value="true" />
			<persistent value="true" />
		</Item>
		<Item>
			<filename>dlc_stuyk:/paletobar_ytyp.ityp</filename>
			<fileType>DLC_ITYP_REQUEST</fileType>
			<overlay value="false" />
			<disabled value="true" />
			<persistent value="true" />
			<contents>CONTENTS_PROPS</contents>
		</Item>
	</dataFiles>
	<contentChangeSets>
		<Item>
			<changeSetName>STUYK_AUTOGEN</changeSetName>
			<mapChangeSetData />
			<filesToInvalidate />
			<filesToDisable />
			<filesToEnable>
				<Item>dlc_dnp:/objects.rpf</Item>
				<Item>dlc_dnp:/paletobar_ytyp.ityp</Item>
			</filesToEnable>
			<txdToLoad />
			<txdToUnload />
			<residentResources />
			<unregisterResources />
			<requiresLoadingScreen value="false" />
		</Item>
	</contentChangeSets>
	<patchFiles />
</CDataFileMgr__ContentsOfDataFileXml>
```