import { Clothing } from '~/src/models/Item/Clothing/types';
import outfitItemWear from '~/src/store/thunks/outfitItemWear';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

export interface OutfitItemWearOptions {
  item: Clothing;
}
type Options = EventOptions & OutfitItemWearOptions;

class OutfitItemWear extends EventAbstract<Options> {
  public static event: string = 'outfit:item:wear';

  effects: Effect<Options>[] = [];
  validators: Validator<Options>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(outfitItemWear(options.item));
  }
}

export default OutfitItemWear;
