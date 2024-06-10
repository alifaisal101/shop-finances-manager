import { Route } from 'react-router-dom';
import PurchasesRecords from './pages/PurchasesRecords';
import ModifyPurchasesRecords from './pages/ModifyReturnPurchases';
import ReturnPurchases from './pages/ReturnPurchases';
import ModifyReturnPurchases from './pages/ModifyPurchasesRecords';
import { routesPermissions } from '../../routes-permissions';
import Guard from '../../components/containers/Guard';
export default [
  <Route path="/purchases/records">
    <Guard
      requiredPermissions={
        routesPermissions['/purchases'].subPages['/records'].permissions
      }
    >
      {PurchasesRecords}
    </Guard>
  </Route>,
  <Route path="/purchases/modify-record">
    <Guard
      requiredPermissions={
        routesPermissions['/purchases'].subPages['/modify-record'].permissions
      }
    >
      {ModifyPurchasesRecords}
    </Guard>
  </Route>,
  <Route path="/purchases/return-purchase">
    <Guard
      requiredPermissions={
        routesPermissions['/purchases'].subPages['/return-purchase'].permissions
      }
    >
      {ReturnPurchases}
    </Guard>
  </Route>,
  <Route path="/purchases/modify-return-purchase">
    <Guard
      requiredPermissions={
        routesPermissions['/purchases'].subPages['/modify-return-purchase']
          .permissions
      }
    >
      {ModifyReturnPurchases}
    </Guard>
  </Route>,
];
