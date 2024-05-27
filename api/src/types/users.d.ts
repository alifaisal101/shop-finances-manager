import { DateSearchIn, StringSearchIn } from './search-query';

export interface UsersSearchQueryIn {
  username?: StringSearchIn;
  roleId?: ObjectIdIn;
  phoneNumber?: StringSearchIn;
  fullName?: StringSearchIn;
  notes?: StringSearchIn;
  workShift?: StringSearchIn;
  createdAt?: DateSearchIn;
  updatedAt?: DateSearchIn;
}
