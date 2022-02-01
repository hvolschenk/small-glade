declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'dev' | 'development' | 'prod' | 'production' | 'test';
      TILE_SIZE: string;
      VITALS_FULLNESS_HEALTH_LOSS_PER_TURN: string;
      VITALS_FULLNESS_LOSS_PER_TURN: string;
      VITALS_HYDRATION_HEALTH_LOSS_PER_TURN: string;
      VITALS_HYDRATION_LOSS_PER_TURN: string;
      VITALS_WARMTH_HEALTH_LOSS_PER_TURN: string;
      VITALS_WARMTH_LOSS_PER_TURN: string;
      WEATHER_TEMPERATURE_LIMIT_LOWER: string;
      WEATHER_TEMPERATURE_LIMIT_UPPER: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
