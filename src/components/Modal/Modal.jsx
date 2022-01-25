import React from 'react';
import classes from './Modal.module.css';

export const ModalCourse = ({ children, show, close }) => {
  const styleModal = [classes['modal-crs']];
  if (!show) {
    styleModal.push(classes['hide']);
  }

  return (
    <div
      //   style={{ display: show ? 'grid' : 'none' }}
      //   className={classes['modal-crs']}
      className={styleModal.join(' ')}
      onClick={close}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
