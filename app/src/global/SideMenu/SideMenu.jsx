import { IonContent, IonList, IonMenu } from '@ionic/react';
import './__SideMenu.css';
import appPages from './side-menu-items';
import SubItem from '../../components/stateless/SubItem/SubItem';
import SideMenuItemList from '../../components/containers/SideMenuItemList/SideMenuItemList';
import ZuseLogo from '../../components/stateless/ZuseLogo/ZuseLogo';
import { useRecoilState } from 'recoil';
import { userState } from '../../store/users.store';
import { roleState } from '../../store/roles.store';
import { permissionValidator } from '../../util/permissions.functions';

console.log(appPages);
const adPage = {
  title: 'لوحة الادمن',
  url: '/admin-panel',
};

const SideMenu = () => {
  const [user, setUser] = useRecoilState(userState);
  const [role, setRole] = useRecoilState(roleState);

  return (
    <IonMenu
      contentId="main"
      type="overlay"
      side="end"
      className="global_sidemenu"
    >
      <IonContent>
        <ZuseLogo size="small"></ZuseLogo>

        <IonList className="side-menu_items-list" id="inbox-list">
          {appPages.map((appPage, index) => {
            // if (
            //   !permissionValidator(role.permissions, appPage?.permissions || [])
            // ) {
            //   return null;
            // }
            if (appPage.subPages?.length > 0) {
              return <SideMenuItemList appPage={appPage} key={index} />;
            }
            return <SubItem key={index} subPage={appPage} />;
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
