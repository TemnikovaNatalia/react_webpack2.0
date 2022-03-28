import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const navigate = [
  {
    id: 1,
    to: '/',
    name: 'Главная',
  },
  {
    id: 2,
    to: '/chats',
    name: 'Список чатов',
  },
  {
    id: 3,
    to: '/about',
    name: 'О нас',
  },
  {
    id: 4,
    to: '/dogs',
    name: 'Собачки API ДЗ№8',
  },
  /*{
    id: 5,
    to: '/profile',
    name: 'Профиль',
  },*/
];

export function NavBar() {
  return (
    <ul>
      {navigate.map((link) => {
        return (
          <li key={link.id}>
            <NavLink
              exact
              to={link.to}
              style={(isActive) => ({
                color: isActive ? 'green' : 'blue',
              })}
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(NavBar);