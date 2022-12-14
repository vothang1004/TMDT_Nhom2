import { Menu } from '@mui/material';
import React from 'react';

function MenuAnchor({ anchorEl, open, handleClose, children }) {
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {children}
      </Menu>
    </>
  );
}

export default MenuAnchor;
