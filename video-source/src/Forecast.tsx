import {interpolate,useCurrentFrame,useVideoConfig,Easing} from 'remotion';
import {Slide,Photo} from './Slide';
export const Forecast = () => {
 const f=useCurrentFrame(); const {fps}=useVideoConfig();
 return <Slide><Photo name="06_Year_Three_Forecast" style={{scale:interpolate(f,[0,3.9*fps],[1,1.035],{extrapolateRight:'clamp',easing:Easing.inOut(Easing.cubic)}),transformOrigin:'26% 48%'}} /></Slide>;
};
