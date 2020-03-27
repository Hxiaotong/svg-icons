import * as React from 'react';
import { ReactComponent as CoinmarketcapSvg } from '../svg/coinmarketcap.svg';

const Coinmarketcap = (props: any) => {
  return <CoinmarketcapSvg {...props} width="1em" height="1em" fill="currentColor" className='SvgIcon'/>
}
export default Coinmarketcap
