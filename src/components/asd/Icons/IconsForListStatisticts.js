import React from 'react';
// import IconsSVG from '../../../images/symbol-defs.svg';
import IconsSVG from 'images/symbol-defs-statistic.svg';

export const Icons = ({ name, className, color, height, width }) => {
  // console.log(name);
  return (
    <svg className={`${className}`} fill={color} height={height} width={width}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
};
