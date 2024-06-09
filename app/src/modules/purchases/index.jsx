import { Route } from 'react-router-dom';
import PurchasesRecords from './pages/PurchasesRecords';
import ModifyPurchasesRecords from './pages/ModifyReturnPurchases';
import ReturnPurchases from './pages/ReturnPurchases';
import ModifyReturnPurchases from './pages/ModifyPurchasesRecords';
export default [
  <Route path="/purchases/records">{PurchasesRecords}</Route>,
  <Route path="/purchases/modify-record">{ModifyPurchasesRecords}</Route>,
  <Route path="/purchases/return-purchase">{ReturnPurchases}</Route>,
  <Route path="/purchases/modify-return-purchase">
    {ModifyReturnPurchases}
  </Route>,
];
