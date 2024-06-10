import { useRecoilState } from 'recoil';
import { roleState } from '../../store/roles.store';
import { permissionValidator } from '../../util/permissions.functions';
import { Fragment } from 'react';

const Guard = (props) => {
  const [role, setRole] = useRecoilState(roleState);

  const isValid = permissionValidator(
    role.permissions,
    props.requiredPermissions || []
  );

  return (
    <Fragment>{isValid ? <props.children></props.children> : null}</Fragment>
  );
};

export default Guard;
