---
title: 'vehicle.activeRadioStation'
description: 'Get the currently active radio station or set the active radio station.'
prefix: '[Server]'
---

# activeRadioStation

Allows the vehicle to have a specific in-game radio station set to it.

**Valid Radio Stations**
```js
{
    LosSantosRockRadio: 0,
    NonStopPopFm: 1,
    RadioLosSantos: 2,
    ChannelX: 3,
    WestCoastTalkRadio: 4,
    RebelRadio: 5,
    SoulwaxFm: 6,
    EastLosFm: 7,
    WestCoastClassics: 8,
    BlaineCountyRadio: 9,
    TheBlueArk: 10,
    WorldWideFm: 11,
    FlyloFm: 12,
    TheLowdown: 13,
    RadioMirrorPark: 14,
    Space: 15,
    VinewoodBoulevardRadio: 16,
    SelfRadio: 17,
    TheLab: 18,
    RadioOff: 255
}
```

Returns a `number`.

### Declaration

```typescript
vehicle.activeRadioStation: number
```

### Usage

```js
const stationNumber = vehicle.activeRadioStation;

// OR

vehicle.activeRadioStation = 255; // Off
```

### Real World Example

Turns radio off when the driver leaves the vehicle.

```js
alt.on('playerLeftVehicle', (player, vehicle, seat) => {
    if (seat === 0) {
        vehicle.activeRadioStation = 255;
    }
});
```

_These examples assume you have imported `alt` from `alt-server`._