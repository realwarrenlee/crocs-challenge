import {AbsoluteFill, CanvasImage, staticFile, useVideoConfig} from 'remotion';
import type {CSSProperties, ReactNode} from 'react';

export const picture = (name: string) => staticFile(`images/${name}.png`);
export const Slide = ({children}: {children: ReactNode}) => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{background: '#f4df72'}}>
    <CanvasImage src={staticFile('images/background.jpg')} premountFor={fps} style={{width:'100%',height:'100%',objectFit:'cover'}} />
    <AbsoluteFill style={{background:'rgba(255,244,180,0.15)'}} />
    <div style={{position:'absolute',left:80,top:45,width:1760,height:990,borderRadius:36,overflow:'hidden',background:'#fff',boxShadow:'0 18px 48px #273b2b55'}}>{children}</div>
  </AbsoluteFill>;
};
export const Photo = ({name,style}: {name:string;style?:CSSProperties}) => {
  const {fps} = useVideoConfig();
  return <CanvasImage src={picture(name)} premountFor={fps} style={{position:'absolute',width:'100%',height:'100%',objectFit:'fill',...style}} />;
};
