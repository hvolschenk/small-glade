import classnames from 'classnames';
import React from 'react';

import './full-screen-menu.css';

interface FullScreenMenuProps {
  footer?: React.ReactNode;
  isOpen: boolean;
  list: React.ReactNode;
  onClose(): void;
  selected: React.ReactNode;
  title: string;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({
  footer,
  isOpen,
  list,
  onClose,
  selected,
  title,
}) => (
  <div className={classnames({ 'full-screen-menu': true, open: isOpen })}>
    <div className="title">
      <h1>{title}</h1>
      <button className="close" onClick={onClose} type="button">
        x
      </button>
    </div>
    <div className="content">
      <div className="list">{list}</div>
      <div className="selected">{selected}</div>
    </div>
    {footer && <div className="footer">{footer}</div>}
  </div>
);

export default FullScreenMenu;
