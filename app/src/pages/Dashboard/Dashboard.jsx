import './__Dashboard.css';

import { IonPage } from '@ionic/react';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';

const Dashboard = () => {
  return (
    <IonPage>
      <Header title="بيانات"></Header>
      <Content className="page_content">
        <h1>hiii charts</h1>
      </Content>
    </IonPage>
  );
};

export default Dashboard;
