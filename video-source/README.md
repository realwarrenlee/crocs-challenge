# Stride video source

Editable Remotion project for the Stride competition pitch. See the [main README](../README.md) for the finished video and competition brief, and [VIDEO.md](./VIDEO.md) for edit timing.

## Commands

- Install dependencies: `npm ci`
- Open Remotion Studio: `npm run dev`
- Check the project: `npm run lint`
- Export the pitch: `npx remotion render Stride ../Video_Pitch.mp4 --codec=h264 --crf=18`

## Assets

- `public/images/`: the six original slides and Crocs background.
- `public/nick-voiceover.mp3`: approved Nick recording, unchanged.
- `voiceover/`: transcript, voice settings, and alignment timestamps.
- `src/`: scene components and the synced timeline.

`generate-voiceover.mjs` can regenerate Nick using an `ELEVENLABS_API_KEY` environment variable. Regeneration replaces the approved recording and requires checking alignment again. No API key is needed to preview or render the existing video.
