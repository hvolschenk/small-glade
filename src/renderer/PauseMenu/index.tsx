import classnames from 'classnames';
import React from 'react';

import { useEngine } from '~/src/engine';
import { useSelector } from '~/src/store/hooks';
import { selectGameIsPauseMenuOpen } from '~/src/store/reducers/game/selectors';

import './pause-menu.css';

const PauseMenu: React.FC = () => {
  const { trigger } = useEngine();
  const isPauseMenuOpen = useSelector(selectGameIsPauseMenuOpen);

  const githubOpen = React.useCallback(() => {
    window.open('https://github.com/hvolschenk/small-glade');
  }, []);

  const pauseMenuToggle = React.useCallback(() => {
    trigger('game:pause-menu:toggle');
  }, [trigger]);

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        pauseMenuToggle();
      }
    },
    [pauseMenuToggle],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={classnames({ open: isPauseMenuOpen })} id="pause-menu__container">
      <button onClick={pauseMenuToggle} type="button">
        Resume
      </button>
      <button onClick={githubOpen} type="button">
        GitHub
      </button>
    </div>
  );
};

export default PauseMenu;
