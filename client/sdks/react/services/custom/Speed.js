/* tslint:disable */
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { JSONSearchParams } from '../core/search.params';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { Speed } from '../../models/Speed';


/**
 * Api services for the `Speed` model.
 */

export class SpeedApi extends BaseLoopBackApi {

  constructor(
     
  ) {
    
    super();
    
  }



  /**
   * The name of the model represented by this $resource,
   * i.e. `Speed`.
   */
  getModelName() {
    return "Speed";
  }
}

