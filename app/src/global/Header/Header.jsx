import { IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from "@ionic/react"

const Header = (props) => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle slot="end">{props.title}</IonTitle>
                <IonButtons slot="end">
                    <IonMenuButton />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;