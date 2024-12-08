// Header.tsx
import React from 'react';
import './Header.scss';

interface HeaderProps {
  title: string;
  description: string;
  titleId?: string;
}

const Header: React.FC<HeaderProps> = ({ title, description, titleId }) => {
  return (
    <header className='form-header'>
      <h1 id={titleId}>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default Header;
