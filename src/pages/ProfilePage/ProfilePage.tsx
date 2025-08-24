import { observer } from "mobx-react-lite"
import ProfileViewContainer from "../../components/ProfileArea/ProfileViewContainer/ProfileViewContainer"
import "./ProfilePage.css"

function ProfilePage(){
    return(
        <div className="profile-page-container">
            <ProfileViewContainer/>
        </div>
    )
}

export default observer(ProfilePage)