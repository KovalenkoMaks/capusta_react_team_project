import React from 'react';
import IconsSVG from '../../../images/symbol-defs-statistic.svg';

export const Icons = ({ name, className, color, width, height }) => {

  return (
    <svg className={`${className}`} fill={color} width={width} height={height}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}

