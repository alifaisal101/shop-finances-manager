import { Route } from 'react-router-dom';
import SellsReports from './pages/SellsReports';
import WarehouseReports from './pages/WarehouseReports';
import FinancesReports from './pages/FinancesReports';
import UsersReports from './pages/UsersReports';
import ProvidersReports from './pages/ProvidersReports';
import { routesPermissions } from '../../routes-permissions';
import Guard from '../../components/containers/Guard';
export default [
  <Route path="/reports/sells-reports">
    <Guard
      requiredPermissions={
        routesPermissions['/reports'].subPages['/sells-reports'].permissions
      }
    >
      {SellsReports}
    </Guard>
  </Route>,
  <Route path="/reports/warehouse-reports">
    <Guard
      requiredPermissions={
        routesPermissions['/reports'].subPages['/warehouse-reports'].permissions
      }
    >
      {WarehouseReports}
    </Guard>
  </Route>,
  <Route path="/reports/finances-reports">
    <Guard
      requiredPermissions={
        routesPermissions['/reports'].subPages['/finances-reports'].permissions
      }
    >
      {FinancesReports}
    </Guard>
  </Route>,
  <Route path="/reports/users-reports">
    <Guard
      requiredPermissions={
        routesPermissions['/reports'].subPages['/users-reports'].permissions
      }
    >
      {UsersReports}
    </Guard>
  </Route>,
  <Route path="/reports/providers-reports">
    <Guard
      requiredPermissions={
        routesPermissions['/reports'].subPages['/providers-reports'].permissions
      }
    >
      {ProvidersReports}
    </Guard>
  </Route>,
];
