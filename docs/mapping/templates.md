---
title: 'MLO Template Files'
description: 'MLO Template Files'
prefix: '[Mapping]'
---

# MLO Template Files

Save these as \`.xml\` and import them into your **dlc.rpf**

# Table of Contents

- [MLO Template Files](#mlo-template-files)
- [Table of Contents](#table-of-contents)
  - [_manifest.ymf](#_manifestymf)
  - [ymap_name.ymap](#ymap_nameymap)
  - [ytyp_template.ytyp](#ytyp_templateytyp)

## _manifest.ymf

_Save this an an .xml file to import it into Code Walker_

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<CPackFileMetaData>
  <MapDataGroups/>
  <HDTxdBindingArray/>
  <imapDependencies/>
  <imapDependencies_2>
    <Item>
      <imapName>YMAP_NAME</imapName>
      <manifestFlags>INTERIOR_DATA</manifestFlags>
      <itypDepArray>
        <Item>YTYP_NAME</Item>
      </itypDepArray>
    </Item>
  </imapDependencies_2>
  <itypDependencies_2>
    <Item>
      <itypName>YTYP_NAME</itypName>
      <manifestFlags>INTERIOR_DATA</manifestFlags>
      <itypDepArray>
        <Item>v_electrical</Item>
        <Item>ex_Int_Office_01B_DLC</Item>
        <Item>int_lev_des</Item>
        <Item>v_minigame</Item>
        <Item>apa_int_mp_h_props</Item>
        <Item>ex_int_mp_h_accessories_ex</Item>
        <Item>v_office</Item>
        <Item>v_bar</Item>
        <Item>v_kitchen</Item>
        <Item>cutsobjects</Item>
        <Item>p_v_lev_des_skin</Item>
        <Item>lev_des</Item>
        <Item>ex_int_office_01_dlc</Item>
        <Item>hei_lev_des_mp_dlc</Item>
        <Item>ex_prop_exec_chairs</Item>
        <Item>v_lev_doors</Item>
        <Item>v_fastfood</Item>
        <Item>ex_Int_Office_02c_DLC</Item>
        <Item>int_retail</Item>
        <Item>ex_int_office_03_dlc</Item>
        <Item>hei_DLC_garage_high_NEW</Item>
        <Item>v_int_40</Item>
      </itypDepArray>
    </Item>
  </itypDependencies_2>
  <Interiors>
    <Item>
      <Name>COLISSION_NAME</Name>
      <Bounds>
        <Item>COLISSION_NAME</Item>
      </Bounds>
    </Item>
  </Interiors>
</CPackFileMetaData>
```

## ymap_name.ymap

_Save this an an .xml file to import it into Code Walker_

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<CMapData>
  <name>YMAP_NAME</name>
  <parent/>
  <flags value="0"/>
  <contentFlags value="73"/>
  <streamingExtentsMin x="-786.76940000" y="-636.43710000" z="-580.81100000"/>
  <streamingExtentsMax x="598.04310000" y="744.31310000" z="444.18000000"/>
  <entitiesExtentsMin x="-119.05160000" y="31.28059000" z="-80.81096000"/>
  <entitiesExtentsMax x="-69.67457000" y="76.59537000" z="-55.82000000"/>
  <entities>
    <Item type="CMloInstanceDef">
      <archetypeName>COLISSION_NAME</archetypeName>
      <flags value="1572864"/>
      <guid value="0"/>
      <position x="-95.43555000" y="53.85010000" z="-64.17888000"/>
      <rotation x="0.00000000" y="0.00000000" z="0.22313030" w="-0.97478870"/>
      <scaleXY value="1.00000000"/>
      <scaleZ value="1.00000000"/>
      <parentIndex value="-1"/>
      <lodDist value="500.00000000"/>
      <childLodDist value="0.00000000"/>
      <lodLevel>LODTYPES_DEPTH_HD</lodLevel>
      <numChildren value="0"/>
      <priorityLevel>PRI_REQUIRED</priorityLevel>
      <extensions/>
      <ambientOcclusionMultiplier value="255"/>
      <artificialAmbientOcclusion value="255"/>
      <tintValue value="0"/>
      <groupId value="0"/>
      <floorId value="0"/>
      <defaultEntitySets/>
      <numExitPortals value="1"/>
      <MLOInstflags value="0"/>
    </Item>
  </entities>
  <containerLods/>
  <boxOccluders/>
  <occludeModels/>
  <physicsDictionaries>
    <Item>COLISSION_NAME</Item>
  </physicsDictionaries>
  <instancedData>
    <ImapLink/>
    <PropInstanceList/>
    <GrassInstanceList/>
  </instancedData>
  <timeCycleModifiers/>
  <carGenerators/>
  <LODLightsSOA>
    <direction/>
    <falloff/>
    <falloffExponent/>
    <timeAndStateFlags/>
    <hash/>
    <coneInnerAngle/>
    <coneOuterAngleOrCapExt/>
    <coronaIntensity/>
  </LODLightsSOA>
  <DistantLODLightsSOA>
    <position/>
    <RGBI/>
    <numStreetLights value="0"/>
    <category value="0"/>
  </DistantLODLightsSOA>
  <block>
    <version value="0"/>
    <flags value="0"/>
    <name>YMAP_NAME</name>
    <exportedBy>CodeWalker</exportedBy>
    <owner/>
    <time>31 oktober 2019 15:42</time>
  </block>
</CMapData>
```

## ytyp_template.ytyp

_Save this an an .xml file to import it into Code Walker_

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<CMapTypes>
  <extensions/>
  <archetypes>
    <Item type="CBaseArchetypeDef">
      <lodDist value="1200.00000000"/>
      <flags value="0"/>
      <specialAttribute value="0"/>
      <bbMin x="-5.86522700" y="-9.59981600" z="-0.01172830"/>
      <bbMax x="14.60916000" y="11.79851000" z="2.68779600"/>
      <bsCentre x="0.00000000" y="0.00000000" z="0.00000000"/>
      <bsRadius value="22.34170000"/>
      <hdTextureDist value="1000.00000000"/>
      <name>MODEL_NAME</name>
      <textureDictionary>TEXTURE_NAME</textureDictionary>
      <clipDictionary/>
      <drawableDictionary/>
      <physicsDictionary/>
      <assetType>ASSET_TYPE_DRAWABLE</assetType>
      <assetName>MODEL_NAME</assetName>
      <extensions/>
    </Item>
    <Item type="CMloArchetypeDef">
      <lodDist value="1200.00000000"/>
      <flags value="0"/>
      <specialAttribute value="0"/>
      <bbMin x="-5.86522700" y="-9.59981600" z="-0.01172830"/>
      <bbMax x="14.60916000" y="11.79851000" z="2.68779600"/>
      <bsCentre x="0.00000000" y="0.00000000" z="0.00000000"/>
      <bsRadius value="22.34170000"/>
      <hdTextureDist value="1000.00000000"/>
      <name>COLISSION_NAME</name>
      <textureDictionary/>
      <clipDictionary/>
      <drawableDictionary/>
      <physicsDictionary>COLISSION_NAME</physicsDictionary>
      <assetType>ASSET_TYPE_ASSETLESS</assetType>
      <assetName>COLISSION_NAME</assetName>
      <extensions/>
      <mloFlags value="0"/>
      <entities>
        <Item type="CEntityDef">
          <archetypeName>MODEL_NAME</archetypeName>
          <flags value="1572864"/>
          <guid value="0"/>
          <position x="0.00000000" y="0.00000000" z="0.00000000"/>
          <rotation x="0.00000000" y="0.00000000" z="0.00000000" w="1.00000000"/>
          <scaleXY value="1.00000000"/>
          <scaleZ value="1.00000000"/>
          <parentIndex value="-1"/>
          <lodDist value="1200.00000000"/>
          <childLodDist value="0.00000000"/>
          <lodLevel>LODTYPES_DEPTH_ORPHANHD</lodLevel>
          <numChildren value="0"/>
          <priorityLevel>PRI_REQUIRED</priorityLevel>
          <extensions/>
          <ambientOcclusionMultiplier value="255"/>
          <artificialAmbientOcclusion value="255"/>
          <tintValue value="0"/>
        </Item>
        <Item type="CEntityDef">
          <archetypeName>V_ILev_J2_Door</archetypeName>
          <flags value="32"/>
          <guid value="832377353"/>
          <position x="-10.02219000" y="-1.79984600" z="-0.69429020"/>
          <rotation x="0.00000000" y="0.00000000" z="0.70700780" w="-0.70720570"/>
          <scaleXY value="1.00000000"/>
          <scaleZ value="1.00000000"/>
          <parentIndex value="-1"/>
          <lodDist value="102.16000000"/>
          <childLodDist value="0.00000000"/>
          <lodLevel>LODTYPES_DEPTH_HD</lodLevel>
          <numChildren value="0"/>
          <priorityLevel>PRI_REQUIRED</priorityLevel>
          <extensions/>
          <ambientOcclusionMultiplier value="255"/>
          <artificialAmbientOcclusion value="255"/>
          <tintValue value="0"/>
        </Item>
      </entities>
      <rooms>
        <Item>
          <name>limbo</name>
          <bbMin x="-5.86522700" y="-9.59981600" z="-0.01172830"/>
          <bbMax x="14.60916000" y="11.79851000" z="2.68779600"/>
          <blend value="1.00000000"/>
          <timecycleName>int_lost_small</timecycleName>
          <secondaryTimecycleName/>
          <flags value="96"/>
          <portalCount value="1"/>
          <floorId value="0"/>
          <exteriorVisibiltyDepth value="-1"/>
          <attachedObjects content="int_array">
            0
          </attachedObjects>
        </Item>
        <Item>
          <name>COLISSION_NAME</name>
          <bbMin x="-5.86522700" y="-9.59981600" z="-0.01172830"/>
          <bbMax x="14.60916000" y="11.79851000" z="2.68779600"/>
          <blend value="1.00000000"/>
          <timecycleName>int_lost_small</timecycleName>
          <secondaryTimecycleName/>
          <flags value="96"/>
          <portalCount value="1"/>
          <floorId value="0"/>
          <exteriorVisibiltyDepth value="-1"/>
          <attachedObjects content="int_array">
            1
          </attachedObjects>
        </Item>
      </rooms>
      <portals>
        <Item>
          <roomFrom value="1"/>
          <roomTo value="0"/>
          <flags value="8256"/>
          <mirrorPriority value="0"/>
          <opacity value="0"/>
          <audioOcclusion value="0"/>
          <corners content="vector3_array">
            15.22700000	-15.28900000	-6.83800000
            15.24300000	-16.29700000	-4.41900000
            15.24300000	-19.62100000	-4.41900000
            15.24300000	-19.62100000	-6.89200000
          </corners>
          <attachedObjects/>
        </Item>
      </portals>
      <entitySets/>
      <timeCycleModifiers/>
    </Item>
  </archetypes>
  <name>YTYP_NAME</name>
  <dependencies/>
  <compositeEntityTypes/>
</CMapTypes>
```