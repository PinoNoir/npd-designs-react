import React from 'react';
import './Main.module.css';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className='wrapper'>
      <main className='main'>{children}</main>
    </div>
  );
};

export default Main;
