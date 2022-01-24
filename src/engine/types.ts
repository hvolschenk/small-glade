export interface Engine {
  trigger<O>(event: string, options?: O): void;
}
