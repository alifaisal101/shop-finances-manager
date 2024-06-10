export const permissionValidator = (rolePermissions, requiredPermissions) => {
  console.log(
    rolePermissions,
    'REQURIED HERE:',
    requiredPermissions,
    requiredPermissions.length
  );
  // Check if all required permissions exist in rolePermissions
  for (let i = 0; i < requiredPermissions.length; i++) {
    const requiredPermission = requiredPermissions[i];
    console.log(
      requiredPermission,
      rolePermissions.includes(requiredPermission)
    );
    if (!rolePermissions.includes(requiredPermission)) {
      return false;
    }
  }
  // Return true if all required permissions exist, false otherwise
  return true;
};
