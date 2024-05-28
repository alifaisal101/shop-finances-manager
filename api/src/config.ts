import { InPermissionsObject } from './types/permissions';
import { PredefinedRolesIn } from './types/roles';
import { permissionsExtractor } from './utils/functions/permissions';

// Server
export const NODE_ENV = process.env.NODE_ENV || 'dev';
export const PORT = process.env.PORT || 3000;
// DB
export const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1/test-sfm';
// Environment
export const node_env = process.env.NODE_ENV || 'development';

// JSONs Permissions
export const permissionsObj: InPermissionsObject = require('./../permissions.json');

// Extract all permissions in one single array
// export const permissions = permissionsExtractor(permissionsObj);

export const permissionsEnum = permissionsExtractor(permissionsObj);

// Predefined data

export const predefinedRoles: PredefinedRolesIn = require('./../predefined-data/roles.json');
