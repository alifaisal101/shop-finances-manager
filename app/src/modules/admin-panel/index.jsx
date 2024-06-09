import { Route } from 'react-router-dom';
import AppSettings from './pages/AppSettings';
import DatabaseSettings from './pages/DatabaseSettings';
import Logs from './pages/Logs';
import Roles from './pages/Roles';
import Trademarks from './pages/Trademarks';
import Users from './pages/Users';
export default [
  <Route path="/admin-panel/app-settings">{AppSettings}</Route>,
  <Route path="/admin-panel/database">{DatabaseSettings}</Route>,
  <Route path="/admin-panel/logs">{Logs}</Route>,
  <Route path="/admin-panel/roles">{Roles}</Route>,
  <Route path="/admin-panel/trademarks">{Trademarks}</Route>,
  <Route path="/admin-panel/users">{Users}</Route>,
];
