import { IonPage } from '@ionic/react';
import './__Companies.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import CompaniesTable from '../../components/containers/Tables/CompaniesTable/CompaniesTable';

const Companies = () => {
  return (
    <IonPage>
      <Header title="الشركات"></Header>
      <Content className="page_content">
        <CompaniesTable></CompaniesTable>
      </Content>
    </IonPage>
  );
};

export default Companies;
