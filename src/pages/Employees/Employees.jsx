import { IonPage } from "@ionic/react";
import "./__Employees.css";
import Header from "../../global/Header/Header";

const Employees = () => {
    return (
        <IonPage>
            <Header title="الموظفين" />

            <h1>
            Employees
            </h1>
        </IonPage>
    );
}

export default Employees;