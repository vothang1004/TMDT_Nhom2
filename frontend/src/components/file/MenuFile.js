import { Menu, MenuItem } from '@mui/material';
import React from 'react';

function MenuFile({ open, anchorEl, handleClose }) {
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
        <MenuItem onClick={handleClose}>Đổi tên</MenuItem>
        <MenuItem onClick={handleClose}>Xóa</MenuItem>
        <MenuItem onClick={handleClose}>Kích thước</MenuItem>
      </Menu>
    </>
  );
}

export default MenuFile;
