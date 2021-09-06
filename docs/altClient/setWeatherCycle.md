---
title: 'alt.setWeatherCycle'
description: 'Sets the current weather cycle for the local player.'
prefix: '[Client]'
---

# alt.setWeatherCycle

Sets the current weather cycle for the local player.

Weather array must have an equal amount of multipliers.

This does **not activate** unless `setWeatherSyncActive` is enabled. Which synchronizes the weather with other players.

**Weather Values**

```
0 - Extra Sunny
1 - Clear
2 - Clouds
3 - Smog
4 - Foggy
5 - Overcast
6 - Rain
7 - Thunder
8 - Light Rain
9 - Smoggy Light Rain
10 - Light Snow
11 - Window Snow
12 - Snow
13 - Christmas
14 - Halloween
```

### Declaration

```typescript
alt.setWeatherCycle(weathers: number[], multipliers: number[]): void
```

### Usage

```js
alt.setWeatherCycle([0, 1], [1, 1]);
```

### Real World Example

```js
alt.setWeatherCycle(
    [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1]
);
```

_These examples assume you have imported `alt` from `alt-client`._