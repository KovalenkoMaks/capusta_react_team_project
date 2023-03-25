import * as React from 'react';
import styles from './CloseSvg.module.css';

export default function CloseSvg() {
  return (
    <>
      <svg
        className={styles.closesvg}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L13 13" strokeWidth="2" />
        <path d="M1 13L13 0.999999" strokeWidth="2" />
      </svg>
    </>
  );
}
