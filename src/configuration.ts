const configuration = {
  tileSize: () => parseInt(process.env.TILE_SIZE, 10),
  vitals: {
    fullnessHealthLossPerTurn: () => parseInt(process.env.VITALS_FULLNESS_HEALTH_LOSS_PER_TURN, 10),
    fullnessLossPerTurn: () => parseInt(process.env.VITALS_FULLNESS_LOSS_PER_TURN, 10),
    hydrationHealthLossPerTurn: () =>
      parseInt(process.env.VITALS_HYDRATION_HEALTH_LOSS_PER_TURN, 10),
    hydrationLossPerTurn: () => parseInt(process.env.VITALS_HYDRATION_LOSS_PER_TURN, 10),
    warmthHealthLossPerTurn: () => parseInt(process.env.VITALS_WARMTH_HEALTH_LOSS_PER_TURN, 10),
    warmthLossPerTurn: () => parseInt(process.env.VITALS_WARMTH_LOSS_PER_TURN, 10),
  },
  weather: {
    temperatureLimitLower: () => parseInt(process.env.WEATHER_TEMPERATURE_LIMIT_LOWER, 10),
    temperatureLimitUpper: () => parseInt(process.env.WEATHER_TEMPERATURE_LIMIT_UPPER, 10),
  },
};

export default configuration;
