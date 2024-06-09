import { Route } from 'react-router-dom';
import SellsReports from './pages/SellsReports';
import WarehouseReports from './pages/WarehouseReports';
import FinancesReports from './pages/FinancesReports';
import UsersReports from './pages/UsersReports';
import ProvidersReports from './pages/ProvidersReports';
export default [
  <Route path="/reports/sells-reports">{SellsReports}</Route>,
  <Route path="/reports/warehouse-reports">{WarehouseReports}</Route>,
  <Route path="/reports/finances-reports">{FinancesReports}</Route>,
  <Route path="/reports/users-reports">{UsersReports}</Route>,
  <Route path="/reports/providers-reports">{ProvidersReports}</Route>,
];
