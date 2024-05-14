export interface InPermissionsObject {
  mainFeatures: MainFeatures;
}
interface MainFeatures {
  adminPanel: AdminPanel;
  cashier: Cashier;
  warehouses: Warehouses;
  sells: Sells;
  purchases: Sells;
  providers: Providers;
  management: Management;
  financesAccounts: FinancesAccounts;
  reports: Reports;
  chartData: Pos;
}
interface Reports {
  access: string;
  subFeatures: SubFeatures8;
}
interface SubFeatures8 {
  sellsReports: Roles;
  warehousesReports: Roles;
  financesReports: Roles;
  usersReports: Roles;
  providersReports: Roles;
}
interface FinancesAccounts {
  access: string;
  subFeatures: SubFeatures7;
}
interface SubFeatures7 {
  specialAccounts: Roles;
  companiesAccounts: Roles;
}
interface Management {
  access: string;
  subFeatures: SubFeatures6;
}
interface SubFeatures6 {
  employees: Employees;
  otherSpendings: Employees;
  subscriptions: Employees;
}
interface Employees {
  access: string;
  delete: string;
  modify: string;
  create: string;
  suspend: string;
}
interface Providers {
  access: string;
  subFeatures: SubFeatures5;
}
interface SubFeatures5 {
  companies: Roles;
  delegates: Roles;
}
interface Sells {
  access: string;
  subFeatures: SubFeatures4;
}
interface SubFeatures4 {
  records: Roles;
  modifyRecord: Roles;
  returnRecord: Roles;
  modifyReturnRecord: Roles;
}
interface Warehouses {
  access: string;
  subFeatures: SubFeatures3;
}
interface SubFeatures3 {
  warehouses: Roles;
  items: Roles;
  moveItems: Roles;
  emptyItems: Pos;
  expiredItems: Pos;
  printBarcode: Roles;
  addItems: Roles;
  removeItems: Roles;
}
interface Cashier {
  access: string;
  subFeatures: SubFeatures2;
}
interface SubFeatures2 {
  pos: Pos;
  refund: Roles;
  returns: Roles;
}
interface Pos {
  access: string;
}
interface AdminPanel {
  access: string;
  subFeatures: SubFeatures;
}
interface SubFeatures {
  users: Users;
  roles: Roles;
  logs: Logs;
  database: Database;
  appSettings: AppSettings;
}
interface AppSettings {
  access: string;
  modify: string;
}
interface Database {
  access: string;
  modify: string;
  backup: string;
}
interface Logs {
  access: string;
  delete: string;
}
interface Roles {
  access: string;
  delete: string;
  modify: string;
  create: string;
}
interface Users {
  access: string;
  delete: string;
  modify: string;
  create: string;
  suspend: string;
  forceLogout: string;
}
