import classnames from 'classnames';
import React from 'react';

import { useEngine } from '~/src/engine';
import l10n from '~/src/l10n';
import { useSelector } from '~/src/store/hooks';
import { selectGameIsRadialMenuOpen } from '~/src/store/reducers/game/selectors';

import Action from './Action';
import { RadialMenuAction } from './types';

import './radial-menu.css';

const RadialMenu: React.FC = () => {
  const [action, setAction] = React.useState<RadialMenuAction>(RadialMenuAction.NONE);
  const { trigger } = useEngine();
  const isRadialMenuOpen = useSelector(selectGameIsRadialMenuOpen);

  const toggleRadialMenu = React.useCallback(() => {
    if (isRadialMenuOpen) {
      setAction(RadialMenuAction.NONE);
    }
    trigger('game:radial-menu:toggle');
  }, [isRadialMenuOpen, setAction, trigger]);

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === ' ') {
        event.preventDefault();
        toggleRadialMenu();
      }
    },
    [toggleRadialMenu],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={classnames({ open: isRadialMenuOpen })} id="radial-menu">
      <div id="radial-menu__header">
        <h1>{l10n.radialMenuTitle}</h1>
        <button id="radial-menu__close" onClick={toggleRadialMenu} type="button">
          X
        </button>
      </div>
      <div id="radial-menu__content">
        {action === RadialMenuAction.NONE && (
          <button
            className="radial-menu__action"
            onClick={() => setAction(RadialMenuAction.FIRE)}
            type="button"
          >
            {l10n.radialMenuActionFire}
          </button>
        )}
        {action !== RadialMenuAction.NONE && (
          <React.Fragment>
            <button onClick={() => setAction(RadialMenuAction.NONE)} type="button">
              &lt;
            </button>
            <Action action={action} onComplete={toggleRadialMenu} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default RadialMenu;
