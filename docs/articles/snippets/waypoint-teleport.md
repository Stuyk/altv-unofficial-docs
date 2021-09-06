---
title: 'Teleport to Waypoint'
description: 'Used to teleport to a waypoint a player has placed on their map.'
prefix: '[Snippet]'
---

[<-- Back to Snippets](./README.md)

# Teleport to Waypoint

## Description

Used to teleport to a waypoint a player has placed on their map.

## Snippet

_server-side_

```js
alt.emitClient(somePlayer, 'triggerTP');
```


_client-side_

```js
alt.onServer('triggerTP', tpToWaypoint)

function tpToWaypoint() {
    var waypoint = native.getFirstBlipInfoId(8);

    if (native.doesBlipExist(waypoint)) {
        var coords = native.getBlipInfoIdCoord(waypoint);
        alt.Player.local.pos = coords;

        var res = native.getGroundZFor3dCoord(coords.x, coords.y, coords.z + 100, undefined, undefined);

        coords.z = res + 1;
        alt.emitServer('doTheTeleport', coords);
    }
}
```

## Example

_server-side_

```js
alt.onClient('doTheTeleport', (player, coords) => {
    player.pos = coords;
});
```