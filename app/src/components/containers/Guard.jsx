import { useRecoilState } from 'recoil';
import { roleState } from '../../store/app/roles.store';
import { permissionValidator } from '../../util/permissions.functions';
import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const Guard = (props) => {
  const [role, setRole] = useRecoilState(roleState);
  const location = useLocation();

  const isValid =
    role.role == 'admin'
      ? true
      : permissionValidator(role.permissions, props.requiredPermissions || []);

  if (!isValid) {
    return <Redirect to="/login" />;
  }

  return isValid ? <>{props.children}</> : null;
};

export default Guard;
