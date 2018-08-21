import { AppUser } from '../../models/AppUser';
import { Firewall } from '../../models/Firewall';
import { Capacity } from '../../models/Capacity';
import { Voip } from '../../models/Voip';
import { Web } from '../../models/Web';
import { Speed } from '../../models/Speed';
import { Route } from '../../models/Route';
import { Hispeed } from '../../models/Hispeed';
import { Quality } from '../../models/Quality';
import { VoipCapacity } from '../../models/VoipCapacity';
export class SDKModels {
  models = {
    AppUser: AppUser,
    Firewall: Firewall,
    Capacity: Capacity,
    Voip: Voip,
    Web: Web,
    Speed: Speed,
    Route: Route,
    Hispeed: Hispeed,
    Quality: Quality,
    VoipCapacity: VoipCapacity,
    
  };

  get(modelName) {
    return this.models[modelName];
  }

  getAll() {
    return this.models;
  }

  getModelNames() {
    return Object.keys(this.models);
  }
}
