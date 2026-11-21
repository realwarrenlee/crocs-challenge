import {Easing,interpolate,useCurrentFrame,useVideoConfig} from 'remotion';
import {Slide,Photo} from './Slide';
export const Process = () => {
 const f=useCurrentFrame(); const {fps}=useVideoConfig();
 return <Slide>
   <Photo name="03_Choose_Write_Give" style={{clipPath:'inset(80.6% 0 0 0)'}} />
   <Photo name="03_Choose_Write_Give" style={{clipPath:'inset(0 66.7% 19.4% 0)',translate:interpolate(f,[.9*fps,1.5*fps],['100% 0px','0% 0px'],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.out(Easing.cubic)})}} />
   <Photo name="03_Choose_Write_Give" style={{clipPath:'inset(0 33.3% 19.4% 33.3%)',translate:interpolate(f,[3.8*fps,4.4*fps],['66.7% 0px','0% 0px'],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.out(Easing.cubic)})}} />
   <Photo name="03_Choose_Write_Give" style={{clipPath:'inset(0 0 19.4% 66.7%)',translate:interpolate(f,[5.6*fps,6.2*fps],['33.3% 0px','0% 0px'],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.out(Easing.cubic)})}} />
 </Slide>;
};
