import * as React from 'react';
import clsx from 'clsx';
import { ReactComponent as StartIcon } from './icons/start-icon.svg';

import './Icon.css';

const icons = {
  start: StartIcon,
};



const Icon = ({ className, name }) => {
  const Icon = icons[name];

  return (
    <i className={clsx('icon', className)}>
      <Icon className='icon__svg'/>
    </i>
  )
}

export default Icon;
