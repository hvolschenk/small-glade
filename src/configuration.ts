// The vision radius of the player
const PLAYER_VISION_RADIUS = 5;

// The size (height/width) of a tile on-screen (in pixels).
// Unfortunately this value cannot be propogated to css,
// because of that this value needs to be updated in `variables.css`, too.
const TILE_SIZE = 80;

// The amount of health lost per turn when fullness reaches zero
const VITALS_FULLNESS_HEALTH_LOSS_PER_TURN = 5;
// The amount of fullness lost per turn
const VITALS_FULLNESS_LOSS_PER_TURN = 1;
// The amount of health lost per turn when hydration reaches zero
const VITALS_HYDRATION_HEALTH_LOSS_PER_TURN = 10;
// The amount of hydration lost per turn
const VITALS_HYDRATION_LOSS_PER_TURN = 4;
// The amount of health lost per turn when warmth reaches zero
const VITALS_WARMTH_HEALTH_LOSS_PER_TURN = 10;
// The amount of warmth lost per turn
const VITALS_WARMTH_LOSS_PER_TURN = 5;

// The lower temperature threshold (it cannot get colder than this)
const WEATHER_TEMPERATURE_LIMIT_LOWER = -20;
// The upper temperature threshold (it cannot get warmer than this)
const WEATHER_TEMPERATURE_LIMIT_UPPER = 1;

// -----------------------------------------------------------------------------

const configuration = {
  player: {
    visionRadius: () => PLAYER_VISION_RADIUS,
  },
  tileSize: () => TILE_SIZE,
  vitals: {
    fullnessHealthLossPerTurn: () => VITALS_FULLNESS_HEALTH_LOSS_PER_TURN,
    fullnessLossPerTurn: () => VITALS_FULLNESS_LOSS_PER_TURN,
    hydrationHealthLossPerTurn: () => VITALS_HYDRATION_HEALTH_LOSS_PER_TURN,
    hydrationLossPerTurn: () => VITALS_HYDRATION_LOSS_PER_TURN,
    warmthHealthLossPerTurn: () => VITALS_WARMTH_HEALTH_LOSS_PER_TURN,
    warmthLossPerTurn: () => VITALS_WARMTH_LOSS_PER_TURN,
  },
  weather: {
    temperatureLimitLower: () => WEATHER_TEMPERATURE_LIMIT_LOWER,
    temperatureLimitUpper: () => WEATHER_TEMPERATURE_LIMIT_UPPER,
  },
};

export default configuration;
