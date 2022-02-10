import React, { useEffect } from 'react';

export const Product = () => {
  useEffect(() => {
    console.log('Mount');
    return () => {
      console.log('Unmount');
    };
  }, []);

  return <div>Product</div>;
};
