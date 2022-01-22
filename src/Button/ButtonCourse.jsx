import React from 'react';
import './ButtonCourse.css';

export const ButtonCourse = ({ children, variant, ...props }) => {
  const styleBtn = `courseBtn ${variant ? variant : ''}`;

  return (
    <button {...props} className={styleBtn}>
      {children}
    </button>
  );
};
