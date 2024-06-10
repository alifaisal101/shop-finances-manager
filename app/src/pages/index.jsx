import { Route } from 'react-router-dom';
import ProgramInfo from './ProgramInfo/ProgramInfo';
import UserInterface from './UserInterface/UserInterface';
import Dashboard from './Dashboard/Dashboard';
export default [
  <Route path="/program-info">{ProgramInfo}</Route>,
  <Route path="/user-interface">{UserInterface}</Route>,
  <Route path="/dashboard">{Dashboard}</Route>,
];
