import CompaniesAccounts from './pages/CompaniesAccounts';
import PersonalAccounts from './pages/PersonalAccounts';
import { Route } from 'react-router-dom';
export default [
  <Route path="/finances-accounts/special-accounts">{PersonalAccounts}</Route>,
  <Route path="/finances-accounts/companies-accounts">
    {CompaniesAccounts}
  </Route>,
];
