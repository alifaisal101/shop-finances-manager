import { Route } from 'react-router-dom';
import ProgramInfo from './ProgramInfo/ProgramInfo';
import UserInterface from './UserInterface/UserInterface';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import { routesPermissions } from '../routes-permissions';
import Guard from '../components/containers/Guard';
export default [
  <Route path="/program-info">
    <ProgramInfo />
  </Route>,
  <Route path="/user-interface">
    <UserInterface />
  </Route>,
  <Route path="/dashboard">
    <Guard requiredPermissions={routesPermissions['/dashboard'].permissions}>
      <Dashboard />
    </Guard>
  </Route>,
  <Route path="/login">
    <Login />
  </Route>,
];
