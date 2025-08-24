import { IconDeviceFloppy,IconCalendar,IconMapPin,IconBriefcase,IconUsers,IconHeart, IconMail,IconSchool,IconPencilMinus } from "@tabler/icons-react"
import { useState } from "react"
import { Select } from "@mantine/core"
import "./ProfileEditView.css"

interface ProfileEditViewProps{
    imgUrl:string|undefined
    userName:string|undefined
    email:string
    age:string
    gender:string|null
    education:string
    city:string|null
    profession:string
    relationshipStatus:string
    onCancel: () => void
    onSave: () => void
}

function ProfileEditView({imgUrl,userName,email,age,gender,education,city,profession,relationshipStatus,onSave,onCancel}:ProfileEditViewProps){

    const [dateInput, setDateInput] = useState(age);
    const [genderInput, setGenderInput] = useState<string|null>(gender);
    const [educationInput, setEducationInput] = useState<string|null>(education);
    const [cityInput, setCityInput] = useState<string|null>(city);
    const [professionInput, setProfessionInput] = useState<string|null>(profession);
    const [relationshipStatusInput, setRelationshipStatusInput] = useState<string|null>(relationshipStatus);

    const genderData = ["Male","Female","Other"];
    const educationData = ["None","High School","B.Sc", "B.A", "M.Sc","M.A", "M.BA", "Ph.D"]
    const cityData = ["Jerusalem", "Tel-Aviv", "Haifa", "Natanya", "Beer-Sheva", "Eilat", "Kiryat-Shemona"];
    const professionData = ["Engineer", "Developer", "Designer", "Teacher", "Mechanic"]
    const relationshipStatusData = ["Single", "Married", "Divorced"]

    return(
        <div className="profile-view-container">
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
                    <div className="date-field-set field-set">
                        <div className="birthdate-label">
                            <IconCalendar/>
                            <p>Date of birth</p>
                        </div>
                        <input 
                            type="date" 
                            value={dateInput} 
                            onChange={(e) => setDateInput(e.target.value)}/>
                    </div>
                    </div>
                    <div className="info-field-container">
                        <Select
                            classNames={{input:"mantine-select"}}
                            w={"100%"}
                            label={
                                <div className="category-label-container">
                                    <IconUsers/>
                                    <p>Gender</p>
                                </div>
                                }
                            data={genderData}
                            value={genderInput}
                            onChange={setGenderInput}
                        />
                    </div>
                </div>
                <div className="field-set-couple">
                    <div className="info-field-container">                           
                        <Select
                            classNames={{input:"mantine-select"}}
                            w={"100%"}
                            label={
                                <div className="category-label-container">
                                    <IconSchool/>
                                    <p>Education</p>
                                </div>
                                }
                            data={educationData}
                            value={educationInput}
                            onChange={setEducationInput}
                        />
                    </div>
                    <div className="info-field-container">
                        <Select
                            searchable
                            classNames={{input:"mantine-select"}}
                            w={"100%"}
                            label={
                                <div className="category-label-container">
                                    <IconMapPin/>
                                    <p>City</p>
                                </div>
                                }
                            data={cityData}
                            value={cityInput}
                            onChange={setCityInput}
                        />
                    </div>
                </div>
                <div className="field-set-couple">
                    <div className="info-field-container">                           
                        <Select
                            searchable
                            classNames={{input:"mantine-select"}}
                            w={"100%"}
                            label={
                                <div className="category-label-container">
                                    <IconBriefcase/>
                                    <p>Profession</p>
                                </div>
                                }
                            data={professionData}
                            value={professionInput}
                            onChange={setProfessionInput}
                        />
                    </div>
                    <div className="info-field-container">
                        <Select
                            classNames={{input:"mantine-select"}}
                            w={"100%"}
                            label={
                                <div className="category-label-container">
                                    <IconHeart/>
                                    <p>Relationship Status</p>
                                </div>
                                }
                            data={relationshipStatusData}
                            value={relationshipStatusInput}
                            onChange={setRelationshipStatusInput}
                        />
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <button 
                    className="cancel-button"
                    onClick={onCancel}
                    >
                        Cancel
                    </button>
                <button 
                    className="save-button"
                    onClick={onSave}
                    >
                        <IconDeviceFloppy/>
                        <p>Save Changes</p>
                </button>
            </div>
        </div>
    )
}

export default ProfileEditView
                                {/* <label htmlFor="date">
                                    <IconCalendar/>
                                    <p>Date of birth</p>
                                </label>
                                <input type="date"
                                    value={dateInput}
                                    onChange={(e) => setDateInput(e.target.value)} /> */}