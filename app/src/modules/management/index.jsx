import { Route } from 'react-router-dom';
import Subscriptions from './pages/Subscriptions';
import OtherSpendings from './pages/OtherSpendings';
import Employees from './pages/Employees';
import Guard from '../../components/containers/Guard';
import { routesPermissions } from '../../routes-permissions';
export default [
  <Route path="/management/employees">
    <Guard
      requiredPermissions={
        routesPermissions['/management'].subPages['/employees'].permissions
      }
    >
      <Employees />
    </Guard>
  </Route>,
  <Route path="/management/other-spendings">
    <Guard
      requiredPermissions={
        routesPermissions['/management'].subPages['/other-spendings']
          .permissions
      }
    >
      <OtherSpendings />
    </Guard>
  </Route>,
  <Route path="/management/subscriptions">
    <Guard
      requiredPermissions={
        routesPermissions['/management'].subPages['/subscriptions'].permissions
      }
    >
      <Subscriptions />
    </Guard>
  </Route>,
];
