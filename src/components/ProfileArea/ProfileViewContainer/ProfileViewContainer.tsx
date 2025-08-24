import { observer } from "mobx-react-lite"
import { profileStore } from "../../../stores/ProfileStore";
import { useState } from "react";
import ProfileView from "../ProfileView/ProfileView";
import ProfileEditView from "../ProfileEditView/ProfileEditView";

function ProfileViewContainer(){

    const[enableEdit,setEnableEdit] = useState(false); //Todo: change to false
        // const [dateInput, setDateInput] = useState("");
        // const [genderInput, setGenderInput] = useState<string|null>("");
        // const [educationInput, setEducationInput] = useState<string|null>("");
        // const [cityInput, setCityInput] = useState<string|null>("");
        // const [professionInput, setProfessionInput] = useState<string|null>("");
        // const [relationshipStatusInput, setRelationshipStatusInput] = useState<string|null>("");

    const handleOnEdit = () => {
        setEnableEdit(!enableEdit)
    }

    const handleSave = () => {
        setEnableEdit(!enableEdit)
    }

    return(
        <div className="profile-view-container-container">
            {enableEdit ?
            <ProfileEditView
                userName={profileStore.activeProfile?.userName}
                imgUrl={profileStore.activeProfile?.imgUrl}
                email={profileStore.activeProfile?.email}
                age="28"
                gender="Male"
                education="B.Sc"
                city="Jerusalem"
                profession="Developer"
                relationshipStatus="Single"
                onCancel={handleOnEdit}
                onSave={handleSave}
                /> :
            <ProfileView 
                userName={profileStore.activeProfile?.userName}
                imgUrl={profileStore.activeProfile?.imgUrl}
                email="example@gmail.com"
                age="28"
                gender="Male"
                education="B.Sc"
                city="jerusalem"
                profession="Developer"
                status="Single"
                onEdit={handleOnEdit}
            />
            }
        </div>
    )
}


export default observer(ProfileViewContainer) 