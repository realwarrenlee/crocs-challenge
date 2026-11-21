import {Composition,Easing,Folder,staticFile,useVideoConfig} from 'remotion';
import {Audio} from '@remotion/media';
import {TransitionSeries,linearTiming} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {Opening} from './Opening';
import {PromiseScene} from './Promise';
import {Process} from './Process';
import {Pilot} from './Pilot';
import {Birthdays} from './Birthdays';
import {Forecast} from './Forecast';

export const Stride = () => {
 const {fps}=useVideoConfig();
 return <>
 <Audio name="Nick — original approved take" src={staticFile('nick-voiceover.mp3')} from={.3*fps} premountFor={fps} />
 <TransitionSeries>
  <TransitionSeries.Sequence name="Supper after finals" durationInFrames={6.2*fps} premountFor={fps}><Opening /></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={slide({direction:'from-bottom'})} timing={linearTiming({durationInFrames:Math.round(.8*fps),easing:Easing.inOut(Easing.cubic)})} />
  <TransitionSeries.Sequence name="One for you, one for me" durationInFrames={Math.round(322/30*fps)} premountFor={fps}><PromiseScene /></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={slide({direction:'from-bottom'})} timing={linearTiming({durationInFrames:Math.round(.8*fps),easing:Easing.inOut(Easing.cubic)})} />
  <TransitionSeries.Sequence name="Choose, write, give" durationInFrames={Math.round(286/30*fps)} premountFor={fps}><Process /></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={slide({direction:'from-bottom'})} timing={linearTiming({durationInFrames:Math.round(.8*fps),easing:Easing.inOut(Easing.cubic)})} />
  <TransitionSeries.Sequence name="Singapore graduation pilot" durationInFrames={Math.round(329/30*fps)} premountFor={fps}><Pilot /></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={slide({direction:'from-bottom'})} timing={linearTiming({durationInFrames:Math.round(.8*fps),easing:Easing.inOut(Easing.cubic)})} />
  <TransitionSeries.Sequence name="South Korea birthdays" durationInFrames={4.1*fps} premountFor={fps}><Birthdays /></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={slide({direction:'from-bottom'})} timing={linearTiming({durationInFrames:Math.round(.8*fps),easing:Easing.inOut(Easing.cubic)})} />
  <TransitionSeries.Sequence name="Year three forecast" durationInFrames={Math.round(238/30*fps)} premountFor={fps}><Forecast /></TransitionSeries.Sequence>
 </TransitionSeries>
 </>;
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="Stride" component={Stride} durationInFrames={1364} fps={30} width={1920} height={1080} />
      <Folder name="Scenes">
       <Composition id="Opening" component={Opening} durationInFrames={186} fps={30} width={1920} height={1080} />
       <Composition id="Promise" component={PromiseScene} durationInFrames={322} fps={30} width={1920} height={1080} />
       <Composition id="Process" component={Process} durationInFrames={286} fps={30} width={1920} height={1080} />
       <Composition id="Pilot" component={Pilot} durationInFrames={329} fps={30} width={1920} height={1080} />
       <Composition id="Birthdays" component={Birthdays} durationInFrames={123} fps={30} width={1920} height={1080} />
       <Composition id="Forecast" component={Forecast} durationInFrames={238} fps={30} width={1920} height={1080} />
      </Folder>
    </>
  );
};
