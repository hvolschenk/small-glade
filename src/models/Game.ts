export enum GameStatus {
  GAME_STATUS_ENDED = 'GAME_STATUS_ENDED',
  GAME_STATUS_IDLE = 'GAME_STATUS_IDLE',
  GAME_STATUS_LOADING = 'GAME_STATUS_LOADING',
  GAME_STATUS_PAUSED = 'GAME_STATUS_PAUSED',
  GAME_STATUS_UNSTARTED = 'GAME_STATUS_UNSTARTED',
}

export interface Game {
  isPauseMenuOpen: boolean;
  isRadialMenuOpen: boolean;
  status: GameStatus;
  turnsSurvived: number;
}
