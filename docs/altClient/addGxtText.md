---
title: 'alt.addGxtText'
description: 'Adds a new gxt text with the specified value.'
prefix: '[Client]'
---

# alt.addGxtText

Used to modify a GXT entry in the GTA:V client. These are most often used to change different menu titles and various default GTA:V text entries in menus.

On other platforms this is often used to rename the `Pause Menu` which is where a lot of servers will change the name of the menu. However, alt:V does not allow changing the text in the upper lefthand corner of the pause menu.

_There does not seem to be a concise list of all GXT Text Entries_

### Declaration

```typescript
alt.addGxtText(key: string, value: string): void
```

### Usage
```js
alt.addGxtText(someEveryTick);
```

### Real World Example

```js
alt.addGxtText('gxtBlipName', 'Renamed player blip');
```

_These examples assume you have imported `alt` from `alt-client`._
