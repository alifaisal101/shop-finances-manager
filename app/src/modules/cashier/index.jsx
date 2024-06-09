import { Route } from 'react-router-dom';
import Pos from './pages/Pos';
import Refunds from './pages/Refunds';
import Returns from './pages/Returns';
export default [
  <Route path="/cashier/pos">{Pos}</Route>,
  <Route path="/cashier/refund">{Refunds}</Route>,
  <Route path="/cashier/returns">{Returns}</Route>,
];
