import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function SideMenu() {
  const [activeItem, setActiveItem] = useState('home');
  const navigate = useNavigate();

  return (
    <Menu pointing vertical fixed="left" inverted>
      <Menu.Item header>React Boilerplate</Menu.Item>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={() => {
          setActiveItem('home');
          navigate('/');
        }}
      >
        Home
      </Menu.Item>
      <Menu.Item
        name="Currencies"
        active={activeItem === 'currencies'}
        onClick={() => {
          setActiveItem('currencies');
          navigate('/currencies');
        }}
      />
    </Menu>
  );
}

export default SideMenu;
