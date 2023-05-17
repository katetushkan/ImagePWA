import * as React from 'react';
import clsx from 'clsx';

import './Background.css';
import {useEffect} from "react";
import {canvasDots} from "./utils";

const Background = ({ className }) => {

  useEffect(() => {
    canvasDots()
  }, [])
  return (
    <div className={clsx("background", className)}>
      <canvas className='connecting-dots'></canvas>
    </div>
  );
};

export default Background;
