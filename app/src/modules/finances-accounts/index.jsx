import Guard from '../../components/containers/Guard';
import { routesPermissions } from '../../routes-permissions';
import CompaniesAccounts from './pages/CompaniesAccounts';
import PersonalAccounts from './pages/PersonalAccounts';
import { Route } from 'react-router-dom';
export default [
  <Route path="/finances-accounts/special-accounts">
    <Guard
      requiredPermissions={
        routesPermissions['/finances-accounts'].subPages['/special-accounts']
          .permissions
      }
    >
      <PersonalAccounts />
    </Guard>
  </Route>,
  <Route path="/finances-accounts/companies-accounts">
    <Guard
      requiredPermissions={
        routesPermissions['/finances-accounts'].subPages['/companies-accounts']
          .permissions
      }
    >
      <CompaniesAccounts />
    </Guard>
  </Route>,
];
