import { useForm } from "@mantine/form";
import { City, Gender, Profession, Status } from "../formUtils";

export function useRegisterForm() {

    const form =  useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: '',
            nickname: '',
            age: 25,
            gender: '' as Gender,
            city: '' as City,
            profession: '' as Profession,
            status: '' as Status,
        },

        validate: {
            email: (value) => {
                if (!value) return 'Email is required';
                return /^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email format';
            },
            password: (value) => {
                if (!value) return 'Password is required';
                if (value.length < 6) return 'Password must be at least 6 characters long';
                return null;
            },
            nickname: (value) => {
                if (!value) return 'Nickname is required';
                if (value.length < 2) return 'Nickname must be at least 2 characters long';
                if (value.length > 20) return 'Nickname must be less than 20 characters';
                if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Nickname can only contain letters, numbers, and underscores';
                return null;
            },
            age: (value) => {
                if (!value) return 'Age is required';
                if (value < 13) return 'You must be at least 13 years old';
                if (value > 120) return 'Please enter a valid age';
                return null;
            },
            gender: (value) => {
                if (!value || value === undefined) return 'Gender is required';
                if (!Object.values(Gender).includes(value as Gender)) return 'Please select a valid gender';
                return null;
            },
            city: (value) => {
                if (!value) return 'City is required';
                if (!value || value === undefined) return 'City is required';
                if (!Object.values(City).includes(value as City)) return 'Please select a valid city';
                return null;
            },
            profession: (value) => {
                if (!value || value === undefined) return null;
                // if (!value || value === undefined) return 'Profession is required';
                if (!Object.values(Profession).includes(value as Profession)) return 'Please select a valid profession';
                return null;
            },
            status: (value) => {
                if (!value || value === undefined) return null;
                if (!Object.values(Status).includes(value as Status)) return 'Please select a valid status';
                return null;
            },
        },
    })

    return form;

}

