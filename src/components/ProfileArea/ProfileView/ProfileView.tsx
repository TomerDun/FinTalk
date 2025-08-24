import { IconCalendar,IconMapPin,IconBriefcase,IconUsers,IconHeart, IconMail,IconSchool,IconPencilMinus } from "@tabler/icons-react"
import "./ProfileView.css"

interface ProfileViewProps{
    imgUrl:string|undefined
    userName:string|undefined
    email:string
    age:string
    gender:string
    education:string
    city:string
    profession:string
    status:string
    onEdit: () => (void)
}

const fieldIconSize = 24;

function ProfileView({imgUrl,userName,email,age,gender,education,city,profession,status,onEdit}:ProfileViewProps){
    return(
        <div className="profile-view-container">
            <button 
                className="profile-edit-button"
                onClick={onEdit}
                >
                <IconPencilMinus size={12}/>
                Edit Profile
                </button>
            <div className="top-section">
                <div className="profile-image-container">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="name-email-container">
                    <div className="name-container">{userName}</div>
                    <div className="email-container">
                        <IconMail size={16}/>
                        {email}
                    </div>
                </div>
            </div>
                <div className="info-section">
                    <div className="field-set-couple">
                        <div className="info-field-container">
                            <div className="field-icon-container"><IconCalendar size={fieldIconSize}/></div>
                            <div className="field-set">
                                <div className="field-title">Age</div>
                                <div className="field-info">{age} years old</div>
                            </div>
                        </div>
                        <div className="info-field-container">
                            <div className="field-icon-container"><IconUsers size={fieldIconSize}/></div>
                            <div className="field-set">
                                <div className="field-title">Gender</div>
                                <div className="field-info">{gender}</div>
                            </div>
                        </div>
                    </div>
                    <div className="field-set-couple">
                        <div className="info-field-container">
                            <div className="field-icon-container"><IconSchool size={fieldIconSize}/></div>
                            <div className="field-set">
                                <div className="field-title">Education</div>
                                <div className="field-info">{education}</div>
                            </div>
                        </div>
                        <div className="info-field-container">
                            <div className="field-icon-container"><IconMapPin size={fieldIconSize}/></div>
                            <div className="field-set">
                                <div className="field-title">City</div>
                                <div className="field-info">{city}</div>
                            </div>
                        </div>
                    </div>
                    <div className="field-set-couple">
                        <div className="info-field-container">
                            <div className="field-icon-container"><IconBriefcase size={fieldIconSize}/></div>
                            <div className="field-set">
                                <div className="field-title">Profession</div>
                                <div className="field-info">{profession}</div>
                            </div>
                        </div>
                        <div className="info-field-container">
                            <div className="field-icon-container"><IconHeart size={fieldIconSize}/></div>
                            <div className="field-set">
                                <div className="field-title">Status</div>
                                <div className="field-info">{status}</div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProfileView