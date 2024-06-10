import { Route } from 'react-router-dom';
import Companies from './pages/Companies';
import Delegates from './pages/Delegates';
import Guard from '../../components/containers/Guard';
import { routesPermissions } from '../../routes-permissions';
export default [
  <Route path="/providers/companies">
    <Guard
      requiredPermissions={
        routesPermissions['/providers'].subPages['/companies'].permissions
      }
    >
      {Companies}
    </Guard>
  </Route>,
  <Route path="/providers/delegates">
    <Guard
      requiredPermissions={
        routesPermissions['/providers'].subPages['/delegates'].permissions
      }
    >
      {Delegates}
    </Guard>
  </Route>,
];
