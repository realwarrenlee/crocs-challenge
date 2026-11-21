import {interpolate,useCurrentFrame,useVideoConfig,Easing} from 'remotion';
import {Slide,Photo} from './Slide';
export const PromiseScene = () => {
 const f=useCurrentFrame(); const {fps}=useVideoConfig();
 return <Slide><Photo name="02_One_For_You_One_For_Me" style={{scale:interpolate(f,[0,.6*fps],[1.25,1],{extrapolateRight:'clamp',easing:Easing.out(Easing.cubic)}),transformOrigin:'78% 57%'}} /></Slide>;
};
