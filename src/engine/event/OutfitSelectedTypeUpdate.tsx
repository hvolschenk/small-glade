import { Outfit } from '~/src/models/Outfit/types';
import outfitSelectedTypeUpdate from '~/src/store/thunks/outfitSelectedTypeUpdate';

import EventAbstract from './EventAbstract';
import { Effect, EventOptions, Validator } from './types';

export interface OutfitSelectedTypeUpdateOptions {
  selectedType: Outfit['selectedType'];
}
type Options = EventOptions & OutfitSelectedTypeUpdateOptions;

class OutfitSelectedTypeUpdate extends EventAbstract<Options> {
  public static event: string = 'outfit:selected-type:update';

  effects: Effect<Options>[] = [];
  validators: Validator<Options>[] = [];

  // eslint-disable-next-line class-methods-use-this
  handler(options: Options): void {
    options.dispatch(outfitSelectedTypeUpdate(options.selectedType));
  }
}

export default OutfitSelectedTypeUpdate;
