export interface InPermissionsObject {
  mainFeatures: MainFeatures;
}
export interface MainFeatures {
  adminPanel: AdminPanel;
  cashier: Cashier;
  warehouses: Warehouses;
  sells: Sells;
  purchases: Purchases;
  providers: Providers;
  management: Management;
  financesAccounts: FinancesAccounts;
  reports: Reports;
  dashboard: Dashboard;
}

export interface AdminPanel {
  access: string;
  subFeatures: SubFeatures;
}

export interface SubFeatures {
  users: Users;
  roles: Roles;
  logs: Logs;
  database: Database;
  trademarks: Trademarks;
  appSettings: AppSettings;
}

export interface Users {
  access: string;
  delete: string;
  modify: string;
  create: string;
  suspend: string;
  forceLogout: string;
}

export interface Roles {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface Logs {
  access: string;
  delete: string;
}

export interface Database {
  access: string;
  modify: string;
  backup: string;
}

export interface Trademarks {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface AppSettings {
  access: string;
  modify: string;
}

export interface Cashier {
  access: string;
  subFeatures: SubFeatures2;
}

export interface SubFeatures2 {
  pos: Pos;
  refund: Refund;
  returns: Returns;
}

export interface Pos {
  access: string;
}

export interface Refund {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface Returns {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface Warehouses {
  access: string;
  subFeatures: SubFeatures3;
}

export interface SubFeatures3 {
  warehouses: Warehouses2;
  items: Items;
  moveItems: MoveItems;
  emptyItems: EmptyItems;
  expiredItems: ExpiredItems;
  printBarcode: PrintBarcode;
  addItems: AddItems;
  removeItems: RemoveItems;
}

export interface Warehouses2 {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface Items {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface MoveItems {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface EmptyItems {
  access: string;
}

export interface ExpiredItems {
  access: string;
}

export interface PrintBarcode {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface AddItems {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface RemoveItems {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface Sells {
  access: string;
  subFeatures: SubFeatures4;
}

export interface SubFeatures4 {
  records: Records;
  modifyRecord: ModifyRecord;
  refundRecords: RefundRecords;
  modifyRefundRecords: ModifyRefundRecords;
  returnRecords: ReturnRecords;
  modifyReturnRecord: ModifyReturnRecord;
}

export interface Records {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface ModifyRecord {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface RefundRecords {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface ModifyRefundRecords {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface ReturnRecords {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface ModifyReturnRecord {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface Purchases {
  access: string;
  subFeatures: SubFeatures5;
}

export interface SubFeatures5 {
  records: Records2;
  modifyRecord: ModifyRecord2;
  returnRecord: ReturnRecord;
  modifyReturnRecord: ModifyReturnRecord2;
}

export interface Records2 {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface ModifyRecord2 {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface ReturnRecord {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface ModifyReturnRecord2 {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface Providers {
  access: string;
  subFeatures: SubFeatures6;
}

export interface SubFeatures6 {
  companies: Companies;
  delegates: Delegates;
}

export interface Companies {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface Delegates {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface Management {
  access: string;
  subFeatures: SubFeatures7;
}

export interface SubFeatures7 {
  employees: Employees;
  otherSpendings: OtherSpendings;
  subscriptions: Subscriptions;
}

export interface Employees {
  access: string;
  delete: string;
  modify: string;
  create: string;
  suspend: string;
}

export interface OtherSpendings {
  access: string;
  delete: string;
  modify: string;
  create: string;
  suspend: string;
}

export interface Subscriptions {
  access: string;
  delete: string;
  modify: string;
  create: string;
  suspend: string;
}

export interface FinancesAccounts {
  access: string;
  subFeatures: SubFeatures8;
}

export interface SubFeatures8 {
  specialAccounts: SpecialAccounts;
  companiesAccounts: CompaniesAccounts;
}

export interface SpecialAccounts {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface CompaniesAccounts {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface Reports {
  access: string;
  subFeatures: SubFeatures9;
}

export interface SubFeatures9 {
  sellsReports: SellsReports;
  warehousesReports: WarehousesReports;
  financesReports: FinancesReports;
  usersReports: UsersReports;
  providersReports: ProvidersReports;
}

export interface SellsReports {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface WarehousesReports {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface FinancesReports {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface UsersReports {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface ProvidersReports {
  access: string;
  delete: string;
  modify: string;
  create: string;
}

export interface Dashboard {
  access: string;
}
