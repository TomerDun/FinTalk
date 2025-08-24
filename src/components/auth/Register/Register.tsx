import { Select, Text, TextInput } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import { City, Gender, Profession, Education, RelationshipStatus, validateRegisterFormByStep } from "../../../utils/formUtils";
import classes from "./Register.module.css";
import Stepper, { Step } from './Stepper';
import { useRegisterForm } from "../../../utils/hooks/useRegisterForm";
import { createUser } from "../../../utils/apiUtils/authApiUtils";
import { insertProfile, type ProfileToDB } from "../../../utils/apiUtils/profileApiUtils";
import { profileStore } from "../../../stores/ProfileStore";

export function Register() {

    const [currentStep, setCurrentStep] = useState(1); // control displayed step
    const form = useRegisterForm();
    const navigate = useNavigate();

    function handleStepChange(step: number) {
        setCurrentStep(step); // Keep state in sync
        return validateRegisterFormByStep(form, step);
    }

    async function handleComplete() {
        try {
            const { email, password, userName, gender, birthdate, city, profession, education, relationshipStatus } = form.getValues();
            
            // create new user in DB
            const newUser = await createUser(email, password);
            const newProfileData: ProfileToDB = {
                userId: newUser?.id as string,
                userName,
                email,
                birthdate,
                gender,
                city,
                profession,
                education,
                relationshipStatus
            }

            // create profile in DB and update activeProfile in store
            await insertProfile(newProfileData);     
            if (newUser) {
                profileStore.getActiveProfile(newUser.id);
            }

            navigate('/');
        } catch (error: any) {
            console.error(error);
            // reject back to step 2 on error
            setCurrentStep(2);

            // Set specific error based on error type
            if (error.message.includes('User already registered')) {
                form.setErrors({
                    email: 'This email is already registered. Please use a different email.'
                });
            } else {
                form.setErrors({ user: error.message });
            }
        }
    }

    return (
        <div className="Register">
            <Stepper
                currentStep={currentStep} // controlled step
                onStepChange={(step) => setCurrentStep(step)}
                onFinalStepCompleted={() => handleComplete()}
                backButtonText="Previous"
                nextButtonText="Next"
                nextButtonProps={{
                    onClick: (e) => {
                        const isValid = handleStepChange(currentStep);
                        if (isValid) e.preventDefault();
                    }
                }}
            >
                <Step>
                    <h2>Welcome to FinTalk!</h2>
                    <p>Let's get it started!</p>
                </Step>
                <Step>
                    <h2>Credentials</h2>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        withAsterisk
                        type="password"
                        label="Password"
                        placeholder="your password"
                        key={form.key('password')}
                        {...form.getInputProps('password')}
                    />
                    {form.errors.user && (
                        <Text c="red" size="sm" mt="sm">
                            {form.errors.user}
                        </Text>
                    )}
                </Step>
                <Step>
                    <h2>Let us get to know you better...</h2>
                    <TextInput
                        withAsterisk
                        label="userName"
                        placeholder="your anonymous usermame"
                        key={form.key('userName')}
                        {...form.getInputProps('userName')}
                    />
                    <Select
                        withAsterisk
                        mt="md"
                        comboboxProps={{ withinPortal: true }}
                        data={Object.values(Gender)}
                        placeholder="Pick one"
                        label="Pick your Gender"
                        classNames={classes}
                        key={form.key('gender')}
                        {...form.getInputProps('gender')}
                    />
                    <TextInput
                        withAsterisk
                        type="date"
                        label="Birth Date"
                        placeholder="Select your birth date"
                        key={form.key('birthdate')}
                        {...form.getInputProps('birthdate')}
                    />
                    <Select
                        withAsterisk
                        mt="md"
                        comboboxProps={{ withinPortal: true }}
                        data={Object.values(City)}
                        placeholder="Pick your city"
                        label="Your City"
                        searchable
                        nothingFoundMessage="Nothing found..."
                        classNames={classes}
                        key={form.key('city')}
                        {...form.getInputProps('city')}
                    />
                </Step>
                <Step>
                    <h2>Some more info to give you the best results</h2>
                    <Select
                        mt="md"
                        comboboxProps={{ withinPortal: true }}
                        data={Object.values(Profession)}
                        placeholder="Pick your profession"
                        label="Your profession"
                        clearable
                        searchable
                        nothingFoundMessage="Nothing found..."
                        classNames={classes}
                        key={form.key('profession')}
                        {...form.getInputProps('profession')}
                    />
                    <Select
                        mt="md"
                        comboboxProps={{ withinPortal: true }}
                        data={Object.values(Education)}
                        placeholder="Pick your education level"
                        label="Education Level"
                        clearable
                        searchable
                        nothingFoundMessage="Nothing found..."
                        classNames={classes}
                        key={form.key('education')}
                        {...form.getInputProps('education')}
                    />
                    <Select
                        mt="md"
                        comboboxProps={{ withinPortal: true }}
                        data={Object.values(RelationshipStatus)}
                        placeholder="Pick your relationship status"
                        label="Relationship Status"
                        clearable
                        searchable
                        nothingFoundMessage="Nothing found..."
                        classNames={classes}
                        key={form.key('relationshipStatus')}
                        {...form.getInputProps('relationshipStatus')}
                    />
                </Step>
                <Step>
                    <h2>Final Step</h2>
                    <p>Now the show begins!!!</p>
                </Step>
            </Stepper>
        </div>
    );
}
