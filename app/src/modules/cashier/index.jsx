import { Route } from 'react-router-dom';
import Pos from './pages/Pos';
import Refunds from './pages/Refunds';
import Returns from './pages/Returns';
import { routesPermissions } from '../../routes-permissions';
import Guard from '../../components/containers/Guard';
export default [
  <Route path="/cashier/pos">
    <Guard
      requiredPermissions={
        routesPermissions['/cashier'].subPages['/pos'].permissions
      }
    >
      <Pos />
    </Guard>
  </Route>,
  <Route path="/cashier/refund">
    <Guard
      requiredPermissions={
        routesPermissions['/cashier'].subPages['/refund'].permissions
      }
    >
      <Refunds />
    </Guard>
  </Route>,
  <Route path="/cashier/returns">
    <Guard
      requiredPermissions={
        routesPermissions['/cashier'].subPages['/returns'].permissions
      }
    >
      <Returns />
    </Guard>
  </Route>,
];
