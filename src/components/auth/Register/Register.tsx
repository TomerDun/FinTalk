import { NumberInput, Select, TextInput } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import { City, Gender, Profession, Status, validateRegisterFormByStep } from "../../../utils/formUtils";
import classes from "./Register.module.css";
import Stepper, { Step } from './Stepper';
import { useRegisterForm } from "../../../utils/hooks/useRegisterForm";

export function Register() {

    const [currentStep, setCurrentStep] = useState(1);

    const form = useRegisterForm();
    const navigate = useNavigate();

    function handleStepChange(step: number) {
        return validateRegisterFormByStep(form, step);
    }

    return (
        <div className="Register">
            <Stepper
                initialStep={1}
                onStepChange={(step) => {
                    setCurrentStep(step)
                }}
                onFinalStepCompleted={() => {
                    setTimeout(() => {
                        navigate('/')
                    }, 1000)
                }}
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
                </Step>
                <Step>
                    <h2>Let us get to know you better...</h2>
                    <TextInput
                        withAsterisk
                        label="nickname"
                        placeholder="your anonymous nickname"
                        key={form.key('nickname')}
                        {...form.getInputProps('nickname')}
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
                    <NumberInput
                        withAsterisk
                        placeholder="age"
                        min={13}
                        max={120}
                        label="Pick your age"
                        key={form.key('age')}
                        {...form.getInputProps('age')}
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
                        data={Object.values(Status)}
                        placeholder="Pick your status"
                        label="Your status"
                        clearable
                        searchable
                        nothingFoundMessage="Nothing found..."
                        classNames={classes}
                        key={form.key('status')}
                        {...form.getInputProps('status')}
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
