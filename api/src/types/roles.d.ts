import { DateSearchIn, StringSearchIn } from './search-query';

interface RolesSearchQueryIn {
  name?: StringSearchIn;
  description?: StringSearchIn;
  createdAt?: DateSearchIn;
}

export interface predefinedRoleIn {
  role: string;
  default: true;
  permissions: string[];
}

export interface PredefinedRolesIn {
  roles: predefinedRoleIn[];
}
