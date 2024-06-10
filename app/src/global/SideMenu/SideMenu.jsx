import { IonContent, IonList, IonMenu } from '@ionic/react';
import './__SideMenu.css';
import appPages from './side-menu-items';
import SubItem from '../../components/stateless/SubItem/SubItem';
import SideMenuItemList from '../../components/containers/SideMenuItemList/SideMenuItemList';
import ZuseLogo from '../../components/stateless/ZuseLogo/ZuseLogo';

const adPage = {
  title: 'لوحة الادمن',
  url: '/admin-panel',
};

const SideMenu = () => {
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
