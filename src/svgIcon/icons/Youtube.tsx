import * as React from 'react';
import { ReactComponent as YoutubeSvg } from '../svg/youtube.svg';

const Youtube = (props: any) => {
  return <YoutubeSvg {...props} width="1em" height="1em" fill="currentColor" className='SvgIcon'/>
}
export default Youtube
