import { Route } from 'react-router-dom';
import Warehouses from './pages/Warehouses';
import Items from './pages/Items';
import MoveItems from './pages/MoveItems';
import EmptyItems from './pages/EmptyItems';
import ExpiredItems from './pages/expired-items';
import PrintBarcode from './pages/PrintBarcode';
import AddItems from './pages/AddItems';
import RemoveItems from './pages/RemoveItems';
import { routesPermissions } from '../../routes-permissions';
import Guard from '../../components/containers/Guard';
export default [
  <Route path="/warehouses/warehouses">
    <Guard
      requiredPermissions={
        routesPermissions['/warehouses'].subPages['/warehouses'].permissions
      }
    >
      {Warehouses}
    </Guard>
  </Route>,
  <Route path="/warehouses/items">
    <Guard
      requiredPermissions={
        routesPermissions['/warehouses'].subPages['/items'].permissions
      }
    >
      {Items}
    </Guard>
  </Route>,
  <Route path="/warehouses/move-items">
    <Guard
      requiredPermissions={
        routesPermissions['/warehouses'].subPages['/move-items'].permissions
      }
    >
      {MoveItems}
    </Guard>
  </Route>,
  <Route path="/warehouses/empty-items">
    <Guard
      requiredPermissions={
        routesPermissions['/warehouses'].subPages['/empty-items'].permissions
      }
    >
      {EmptyItems}
    </Guard>
  </Route>,
  <Route path="/warehouses/expired-items">
    <Guard
      requiredPermissions={
        routesPermissions['/warehouses'].subPages['/expired-items'].permissions
      }
    >
      {ExpiredItems}
    </Guard>
  </Route>,
  <Route path="/warehouses/print-barcode">
    <Guard
      requiredPermissions={
        routesPermissions['/warehouses'].subPages['/print-barcode'].permissions
      }
    >
      {PrintBarcode}
    </Guard>
  </Route>,
  <Route path="/warehouses/add-items">
    <Guard
      requiredPermissions={
        routesPermissions['/warehouses'].subPages['/add-items'].permissions
      }
    >
      {AddItems}
    </Guard>
  </Route>,
  <Route path="/warehouses/remove-items">
    <Guard
      requiredPermissions={
        routesPermissions['/warehouses'].subPages['/remove-items'].permissions
      }
    >
      {RemoveItems}
    </Guard>
  </Route>,
];
