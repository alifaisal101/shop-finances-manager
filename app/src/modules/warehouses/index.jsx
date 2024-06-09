import { Route } from 'react-router-dom';
import Warehouses from './pages/Warehouses';
import Items from './pages/Items';
import MoveItems from './pages/MoveItems';
import EmptyItems from './pages/EmptyItems';
import ExpiredItems from './pages/expired-items';
import PrintBarcode from './pages/PrintBarcode';
import AddItems from './pages/AddItems';
import RemoveItems from './pages/RemoveItems';
export default [
  <Route path="/warehouses/warehouses">{Warehouses}</Route>,
  <Route path="/warehouses/items">{Items}</Route>,
  <Route path="/warehouses/move-items">{MoveItems}</Route>,
  <Route path="/warehouses/empty-items">{EmptyItems}</Route>,
  <Route path="/warehouses/expired-items">{ExpiredItems}</Route>,
  <Route path="/warehouses/print-barcode">{PrintBarcode}</Route>,
  <Route path="/warehouses/add-items">{AddItems}</Route>,
  <Route path="/warehouses/remove-items">{RemoveItems}</Route>,
];
