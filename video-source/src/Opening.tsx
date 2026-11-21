import {interpolate,useCurrentFrame,useVideoConfig,Easing} from 'remotion';
import {Slide,Photo} from './Slide';
export const Opening = () => {
 const f=useCurrentFrame(); const {fps}=useVideoConfig();
 return <Slide><Photo name="01_Supper_After_Finals" style={{scale:interpolate(f,[0,5.3*fps],[1.24,1],{extrapolateRight:'clamp',easing:Easing.inOut(Easing.cubic)}),transformOrigin:'52% 60%'}} /></Slide>;
};
