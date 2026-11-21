import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';

const script = await readFile(new URL('../Video_Script.md', import.meta.url), 'utf8');
const paragraphs = script.split(/\r?\n/).filter(line => line.startsWith('| **')).map(line => line.split('|')[2].trim().replaceAll('*', ''));
if (paragraphs.length !== 6) throw new Error('Expected six script paragraphs.');
if (!process.env.ELEVENLABS_API_KEY) throw new Error('ELEVENLABS_API_KEY is required.');

const voiceKey = 'nick';
const voice = {id: '7jynqzOvnVP89nA7TB0m', name: 'Nick - Relatable & Engaging Friend'};
const voiceId = voice.id;
const settings = {
  text: paragraphs.join('\n\n'),
  model_id: 'eleven_multilingual_v2',
  voice_settings: {stability: 0.5, similarity_boost: 0.75, style: 0.2, speed: 1.1},
};
const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`, {
  method: 'POST',
  headers: {'xi-api-key': process.env.ELEVENLABS_API_KEY, 'Content-Type': 'application/json', Accept: 'audio/mpeg'},
  body: JSON.stringify(settings),
});
if (!response.ok) throw new Error(`ElevenLabs ${response.status}: ${await response.text()}`);
const output = new URL('./public/nick-voiceover.mp3', import.meta.url);
await mkdir(new URL('./voiceover/', import.meta.url), {recursive: true});
const audio = Buffer.from(await response.arrayBuffer());
if (audio.length < 1000) throw new Error('Audio response was unexpectedly small.');
await writeFile(output, audio);
await writeFile(new URL(`./voiceover/${voiceKey}-first-take.txt`, import.meta.url), settings.text);
await writeFile(new URL(`./voiceover/${voiceKey}-first-take.json`, import.meta.url), JSON.stringify({voiceId, voiceName: voice.name, ...settings}, null, 2));
console.log(JSON.stringify({output: fileURLToPath(output), bytes: audio.length}));
