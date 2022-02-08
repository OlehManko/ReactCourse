import React, { useEffect } from 'react';

export const Contact = () => {
  useEffect(() => {
    console.log('Mount');
    return () => {
      console.log('Unmount');
    };
  }, []);

  return <div>Contact</div>;
};
