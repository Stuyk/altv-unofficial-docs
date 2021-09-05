---
title: 'vehicle.dashboardColor'
description: 'Used to set or get the color of the dashboard on a vehicle.'
prefix: '[Server]'
---

# dashboardColor

Used to `set` or `get` the color of the dashboard on a vehicle.

Valid values range from `0` to `159`.

Returns a `number`.

### Declaration

```typescript
vehicle.dashboardColor: number
```

### Usage

```js
const dashboardColor = vehicle.dashboardColor;

// OR

vehicle.dashboardColor = 139;
```

### Real World Example

```js
const vehicle = new alt.Vehicle('elegy', 0, 0, 0, 0, 0, 0);
vehicle.dashboardColor = 139;
```

### Visual

![](https://i.imgur.com/WgIYFhV.png)


_These examples assume you have imported `alt` from `alt-server`._