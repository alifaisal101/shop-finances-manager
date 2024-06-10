import { Route } from 'react-router-dom';
import SellsRecords from './pages/SellsRecords';
import ModifySellsRecords from './pages/ModifySellsRecords';
import ReturnSells from './pages/ReturnSells';
import ModifyReturnSells from './pages/ModifyReturnSells';
import Refunds from './pages/Refunds';
import ModifyRefunds from './pages/ModifyRefunds';
export default [
  <Route path="/sells/records">{SellsRecords}</Route>,
  <Route path="/sells/modify-record">{ModifySellsRecords}</Route>,
  <Route path="/sells/refunds">{Refunds}</Route>,
  <Route path="/sells/modify-refunds">{ModifyRefunds}</Route>,
  <Route path="/sells/return-sell">{ReturnSells}</Route>,
  <Route path="/sells/modify-return-sell">{ModifyReturnSells}</Route>,
];
