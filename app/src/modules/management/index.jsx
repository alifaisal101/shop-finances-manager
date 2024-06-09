import { Route } from 'react-router-dom';
import Subscriptions from './pages/Subscriptions';
import OtherSpendings from './pages/OtherSpendings';
import Employees from './pages/Employees';
export default [
  <Route path="/management/employees">{Employees}</Route>,
  <Route path="/management/other-spendings">{OtherSpendings}</Route>,
  <Route path="/management/subscriptions">{Subscriptions}</Route>,
];
