---
title: 'vehicle.headlightColor'
description: 'Used to set or get the color of the headlights on a vehicle.'
prefix: '[Server]'
---

# headlightColor

Used to `set` or `get` the color of the headlights on a vehicle.

Valid values range from `1` to `12`.

```js
{
    Darkblue: 1
    Lightblue: 2
    Turquoise: 3
    Green: 4
    Yellow: 5
    Gold: 6
    Orange: 7
    Red: 8
    Pink: 9
    Violet: 10,
    Purple: 11,
    Ultraviolet: 12
}
```

Returns a `number`.

### Declaration

```typescript
vehicle.headlightColor: number
```

### Usage

```js
const headlightColor = vehicle.headlightColor;

// OR

vehicle.headlightColor = 9;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.modKit = 1;
vehicle.setMod(22, 1);
vehicle.headlightColor = 9;
```

### Visual

![](https://i.imgur.com/7xVxfK2.png)


_These examples assume you have imported `alt` from `alt-server`._