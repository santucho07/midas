import React from 'react';
import Header from './Header';

// eslint-disable-next-line arrow-body-style
const Layout = ({ children, quantity }) => {
  return (
    <div>
      <Header quantity={quantity} />
      {children}
    </div>
  );
};

export default Layout;
