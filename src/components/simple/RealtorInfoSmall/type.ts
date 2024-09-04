import { ISocNetworkAndReview } from '../../../core/models/main';

export interface IRealtorInfoSmall {
  office: string;
  phone: string[];
  email: string;
  socNetworks: ISocNetworkAndReview[];
  specialisation: string[];
}
