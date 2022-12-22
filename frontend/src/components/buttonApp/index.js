import React from 'react';
import { NavLink } from 'react-router-dom';
import './ButtonApp.scss';

function ButtonApp({ component, variant = 'contained', children, link, handleClick, ...props }) {
  let Component = component || 'button';

  if (component === 'a') {
    return (
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? 'app-link active' : 'app-link')}
        {...props}
        onClick={handleClick}
      >
        {children}
      </NavLink>
    );
  }
  let className = 'app-button';
  if (variant === 'contained') {
    className += ' contained';
  } else if (variant === 'outlined') {
    className += ' outlined'
  }
  return (
    <>
      <Component className={className} {...props} onClick={handleClick}>
        {children}
      </Component>
    </>
  );
}

export default ButtonApp;
