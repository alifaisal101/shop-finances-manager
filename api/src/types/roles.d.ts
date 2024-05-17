import { DateSearchIn, StringSearchIn } from './search-query';

interface RolesSearchQueryIn {
  name?: StringSearchIn;
  description?: StringSearchIn;
  createdAt?: DateSearchIn;
}
