import { IonPage } from '@ionic/react';
import './__Subscriptions.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';

const Subscriptions = () => {
  return (
    <IonPage>
      <Header title="الاشتراكات"></Header>
      <Content className="page_content">
        <h1>hiii subscriptions</h1>
      </Content>
    </IonPage>
  );
};

export default Subscriptions;
