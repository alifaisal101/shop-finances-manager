import { Route } from 'react-router-dom';
import AppSettings from './pages/AppSettings';
import DatabaseSettings from './pages/DatabaseSettings';
import Logs from './pages/Logs';
import Roles from './pages/Roles';
import Trademarks from './pages/Trademarks';
import Users from './pages/Users';
import { routesPermissions } from '../../routes-permissions';
import Guard from '../../components/containers/Guard';
export default [
  <Route path="/admin-panel/app-settings">
    <Guard
      requiredPermissions={[
        ...routesPermissions['/admin-panel'].permissions,
        ...routesPermissions['/admin-panel'].subPages['/app-settings']
          .permissions,
      ]}
    >
      <AppSettings />
    </Guard>
  </Route>,
  <Route path="/admin-panel/database">
    <Guard
      requiredPermissions={[
        ...routesPermissions['/admin-panel'].permissions,
        ...routesPermissions['/admin-panel'].subPages['/database'].permissions,
      ]}
    >
      <DatabaseSettings />
    </Guard>
  </Route>,
  <Route path="/admin-panel/logs">
    <Guard
      requiredPermissions={[
        ...routesPermissions['/admin-panel'].permissions,
        ...routesPermissions['/admin-panel'].subPages['/logs'].permissions,
      ]}
    >
      <Logs />
    </Guard>
  </Route>,
  <Route path="/admin-panel/roles">
    <Guard
      requiredPermissions={[
        ...routesPermissions['/admin-panel'].permissions,
        ...routesPermissions['/admin-panel'].subPages['/roles'].permissions,
      ]}
    >
      <Roles />
    </Guard>
  </Route>,
  <Route path="/admin-panel/trademarks">
    <Guard
      requiredPermissions={[
        ...routesPermissions['/admin-panel'].permissions,
        ...routesPermissions['/admin-panel'].subPages['/trademarks']
          .permissions,
      ]}
    >
      <Trademarks />
    </Guard>
  </Route>,
  <Route path="/admin-panel/users">
    <Guard
      requiredPermissions={[
        ...routesPermissions['/admin-panel'].permissions,
        ...routesPermissions['/admin-panel'].subPages['/users'].permissions,
      ]}
    >
      <Users />
    </Guard>
  </Route>,
];
