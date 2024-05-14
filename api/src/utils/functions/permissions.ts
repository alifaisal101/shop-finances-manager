import { InPermissionsObject } from 'src/types/permissions';
import { treeObjectToString } from './objects';

export const permissionsExtractor = (
  permissionsObj: InPermissionsObject,
): string[] => {
  return treeObjectToString(permissionsObj, [0]).split(' ');
};
