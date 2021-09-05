---
title: 'alt.Audio'
description: 'Create an audio source based on a local file.'
prefix: '[Client]'
---

- [alt.Audio](#altaudio)
    - [Declaration](#declaration)
    - [Usage](#usage)
    - [Real World Example](#real-world-example)
- [audio.category](#audiocategory)
    - [Declaration](#declaration-1)
    - [Usage](#usage-1)
- [audio.currentTime](#audiocurrenttime)
    - [Declaration](#declaration-2)
    - [Usage](#usage-2)
- [audio.frontendPlay](#audiofrontendplay)
    - [Declaration](#declaration-3)
    - [Usage](#usage-3)
- [audio.looped](#audiolooped)
    - [Declaration](#declaration-4)
    - [Usage](#usage-4)
- [audio.playing](#audioplaying)
    - [Declaration](#declaration-5)
    - [Usage](#usage-5)
- [audio.playing](#audioplaying-1)
    - [Declaration](#declaration-6)
    - [Usage](#usage-6)
- [audio.source](#audiosource)
    - [Declaration](#declaration-7)
    - [Usage](#usage-7)
- [audio.volume](#audiovolume)
    - [Declaration](#declaration-8)
    - [Usage](#usage-8)
- [audio.addOutput](#audioaddoutput)
    - [Declaration](#declaration-9)
    - [Usage](#usage-9)
- [audio.getOutputs](#audiogetoutputs)
    - [Declaration](#declaration-10)
    - [Usage](#usage-10)
- [audio.on('streamEnded')](#audioonstreamended)
    - [Declaration](#declaration-11)
    - [Usage](#usage-11)
- [audio.on('error')](#audioonerror)
    - [Declaration](#declaration-12)
    - [Usage](#usage-12)
- [audio.play](#audioplay)
    - [Declaration](#declaration-13)
    - [Usage](#usage-13)
- [audio.pause](#audiopause)
    - [Declaration](#declaration-14)
    - [Usage](#usage-14)
- [audio.removeOutput](#audioremoveoutput)
    - [Declaration](#declaration-15)
    - [Usage](#usage-15)
- [audio.reset](#audioreset)
    - [Declaration](#declaration-16)
    - [Usage](#usage-16)
- [audio.seek](#audioseek)
    - [Declaration](#declaration-17)
    - [Usage](#usage-17)

# alt.Audio

Used to create an audio source for an `.ogg` file.

This documentation covers all additional functionality that comes with audio.

### Declaration

```typescript
alt.Audio(source: string, volume: number, category?: string, play2D?: boolean): Audio
```

### Usage
```js
const audio = new alt.Audio('@audio/client/test.ogg', 1, 'test', false);
```

### Real World Example

Plays audio based on the local player entity.

```js
const audio = new alt.Audio('@audio/client/test.ogg', 1, 'test', false);
audio.addOutput(alt.Player.local.scriptID);
audio.play();
```

# audio.category

Returns the current category of the audio.

### Declaration

```typescript
audio.category: string
```

### Usage

```js
const currentCategory = audio.category;
```

# audio.currentTime

Returns the current time in milliseconds of the audio.

### Declaration

```typescript
audio.currentTime: number
```

### Usage

```js
const currentTimeInMS = audio.currentTime;
```

# audio.frontendPlay

Returns if this audio is playing as a 2D.

### Declaration

```typescript
audio.frontendPlay: boolean
```

### Usage

```js
const isFrontendAudio = audio.frontendPlay;
```

# audio.looped

Returns if this audio is set to be looping or not.

### Declaration

```typescript
audio.looped: boolean
```

### Usage

```js
const isLooping = audio.looped;
```

# audio.playing

Returns the maximum time of the track in milliseconds.

### Declaration

```typescript
audio.playing: boolean
```

### Usage

```js
const playing = audio.playing;
```

# audio.playing

Returns whether or not the audio source is currently playing.

### Declaration

```typescript
audio.playing: number
```

### Usage

```js
const playing = audio.playing;
```

# audio.source

Returns the audio source that is currently in-use.

Otherwise, the audio source can be set as well.

### Declaration

```typescript
audio.source: number
```

### Usage

```js
const source = audio.source;

// OR

audio.source = '@audio/client/otherFile.ogg'
```

# audio.volume

Returns the current audio source volume

Otherwise, the audio source volume can be set.

### Declaration

```typescript
audio.volume: number
```

### Usage

```js
const volume = audio.volume;

// OR

audio.volume = 100;
```

# audio.addOutput

Allows a target entity be set as the source of where the audio is coming from. Entity being a player, vehicle, local player, etc.

### Declaration

```typescript
audio.addOutput(entity: number | Entity): void
```

### Usage

```js
const audio = new alt.Audio('@audio/client/test.ogg', 1, 'test', false);
audio.addOutput(alt.Player.local.vehicle.scriptID);
audio.play();
```

# audio.getOutputs

Returns an array of entity numbers that are currently playing the audio output on them. If a single output is specified you will only get the `number` of the entity. Otherwise, you will get an array of entities.

### Declaration

```typescript
audio.getOutputs(): number | Entity[]
```

### Usage

```js
const outputs = audio.getOutputs();

if (Array.isArray(outputs)) {
    console.log('many outputs');
} else {
    console.log('single output');
}
```

# audio.on('streamEnded')

An event that gets emitted when the audio source is done playing.

### Declaration

```typescript
audio.on(event: 'streamEnded', callback: Function): void
```

### Usage

```js
audio.on('streamEnded' () => {
    console.log(`The audio stream has ended.`);
});
```


# audio.on('error')

An event that gets emitted when the audio source is invalid or something has gone wrong with loading the audio source.

### Declaration

```typescript
audio.on(event: "error", callback: (code: number, message: string) => void): void
```

### Usage

```js
audio.on('error' (code: number, message: string) => {
    console.log(`Got Error: ${code} ${message} for Audio`);
});
```

# audio.play

A function to start the playback of the audio.

### Declaration

```typescript
audio.play(): void;
```

### Usage

```js
audio.play();
```

# audio.pause

A function to pause the audio playback.

### Declaration

```typescript
audio.pause(): void;
```

### Usage

```js
audio.pause();
```

# audio.removeOutput

A function to remove the audio playback from an entity.

### Declaration

```typescript
audio.removeOutput(entity: number | Entity): void;
```

### Usage

```js
audio.removeOutput(alt.Player.local.scriptID);
```

# audio.reset

Should completely reset / restart the audio and stop it from playing.

_Should, there's no real example of usage for this._

### Declaration

```typescript
audio.reset(): void;
```

### Usage

```js
audio.reset();
```

# audio.seek

Should seek to a different time in the audio track in `milliseconds`.

### Declaration

```typescript
audio.seek(time: number): void;
```

### Usage

```js
audio.seek(5000); // 5 seconds in
```

_These examples assume you have imported `alt` from `alt-client`._
