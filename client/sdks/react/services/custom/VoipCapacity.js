/* tslint:disable */
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { JSONSearchParams } from '../core/search.params';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { VoipCapacity } from '../../models/VoipCapacity';


/**
 * Api services for the `VoipCapacity` model.
 */

export class VoipCapacityApi extends BaseLoopBackApi {

  constructor(
     
  ) {
    
    super();
    
  }



  /**
   * The name of the model represented by this $resource,
   * i.e. `VoipCapacity`.
   */
  getModelName() {
    return "VoipCapacity";
  }
}

