import * as React from 'react';
import clsx from 'clsx';

import './Loader.css';

const Loader = ({ className }) => {
  return (
    <div className={clsx('loader', className)}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
