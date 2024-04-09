import { IonPage } from '@ionic/react';
import './__Companies.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';

const Companies = () => {
  return (
    <IonPage>
      <Header title="الشركات"></Header>
      <Content className="page_content">
        <h1>hiii companies</h1>
      </Content>
    </IonPage>
  );
};

export default Companies;
