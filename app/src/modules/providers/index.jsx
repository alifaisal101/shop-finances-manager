import { Route } from 'react-router-dom';
import Companies from './pages/Companies';
import Delegates from './pages/Delegates';
export default [
  <Route path="/providers/companies">{Companies}</Route>,
  <Route path="/providers/delegates">{Delegates}</Route>,
];
