import { Route } from 'react-router-dom';
import SellsRecords from './pages/SellsRecords';
import ModifySellsRecords from './pages/ModifySellsRecords';
import ReturnSells from './pages/ReturnSells';
import ModifyReturnSells from './pages/ModifyReturnSells';
import Refunds from './pages/Refunds';
import ModifyRefunds from './pages/ModifyRefunds';
import Guard from '../../components/containers/Guard';
import { routesPermissions } from '../../routes-permissions';
export default [
  <Route path="/sells/records">
    <Guard
      requiredPermissions={
        routesPermissions['/sells'].subPages['/records'].permissions
      }
    >
      <SellsRecords />
    </Guard>
  </Route>,
  <Route path="/sells/modify-record">
    <Guard
      requiredPermissions={
        routesPermissions['/sells'].subPages['/modify-record'].permissions
      }
    >
      <ModifySellsRecords />
    </Guard>
  </Route>,
  <Route path="/sells/refunds">
    <Guard
      requiredPermissions={
        routesPermissions['/sells'].subPages['/refunds'].permissions
      }
    >
      <Refunds />
    </Guard>
  </Route>,
  <Route path="/sells/modify-refunds">
    <Guard
      requiredPermissions={
        routesPermissions['/sells'].subPages['/modify-refunds'].permissions
      }
    >
      <ModifyRefunds />
    </Guard>
  </Route>,
  <Route path="/sells/return-sell">
    <Guard
      requiredPermissions={
        routesPermissions['/sells'].subPages['/return-sell'].permissions
      }
    >
      <ReturnSells />
    </Guard>
  </Route>,
  <Route path="/sells/modify-return-sell">
    <Guard
      requiredPermissions={
        routesPermissions['/sells'].subPages['/modify-return-sell'].permissions
      }
    >
      <ModifyReturnSells />
    </Guard>
  </Route>,
];
