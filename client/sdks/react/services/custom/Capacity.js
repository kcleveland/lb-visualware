/* tslint:disable */
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { JSONSearchParams } from '../core/search.params';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { Capacity } from '../../models/Capacity';


/**
 * Api services for the `Capacity` model.
 */

export class CapacityApi extends BaseLoopBackApi {

  constructor(
     
  ) {
    
    super();
    
  }



  /**
   * The name of the model represented by this $resource,
   * i.e. `Capacity`.
   */
  getModelName() {
    return "Capacity";
  }
}

