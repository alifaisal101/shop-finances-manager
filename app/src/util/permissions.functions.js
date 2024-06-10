export const permissionValidator = (rolePermissions, requiredPermissions) => {
  // Check if all required permissions exist in rolePermissions
  for (let i = 0; i < requiredPermissions.length; i++) {
    const requiredPermission = requiredPermissions[i];

    if (!rolePermissions.includes(requiredPermission)) {
      return false;
    }
  }
  // Return true if all required permissions exist, false otherwise
  return true;
};
