import * as React from 'react';
import { ReactComponent as InstagramSvg } from '../svg/instagram.svg';

const Instagram = (props: any) => {
  return <InstagramSvg {...props} width="1em" height="1em" fill="currentColor" className='SvgIcon'/>
}
export default Instagram
