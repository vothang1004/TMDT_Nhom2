import React from 'react';
import { NavLink } from 'react-router-dom';
import './ButtonApp.scss';

function ButtonApp({ component, children, link, handleClick, ...props }) {
  let Component = component || 'button';

  if (component === 'a') {
    return (
      <NavLink to={link} className={({isActive}) => isActive ? 'app-link active' : 'app-link'} {...props} onClick={handleClick}>
        {children}
      </NavLink>
    );
  }

  return (
    <>
      <Component className="app-button" {...props} onClick={handleClick}>
        {children}
      </Component>
    </>
  );
}

export default ButtonApp;
