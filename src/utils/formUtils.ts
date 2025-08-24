
import type { UseFormReturnType } from "@mantine/form";

export function validateRegisterFormByStep(form: RegisterFormType, step: number) {
    switch (step) {
        case 2:
            const emailValid = form.validateField('email')
            const pwdValid = form.validateField('password');
            return emailValid.hasError || pwdValid.hasError
        case 3:
            const usernameValid = form.validateField('userName')
            const genderValid = form.validateField('gender')
            const birthdateValid = form.validateField('birthdate')
            const cityValid = form.validateField('city');
            return usernameValid.hasError || genderValid.hasError || birthdateValid.hasError || cityValid.hasError;
        case 4:
            const professionValid = form.validateField('profession')
            const educationValid = form.validateField('education')
            const relationshipStatusValid = form.validateField('relationshipStatus')
            return professionValid.hasError || educationValid.hasError || relationshipStatusValid.hasError;
        default:
            return false;
    }
}

export function validateAllRegisterForm(form: RegisterFormType) {
    return form.validate().hasErrors;
}

export type RegisterFormType = UseFormReturnType<{
    email: string;
    password: string;
    userName: string;
    birthdate: string;
    gender: Gender;
    city: City;
    profession: Profession;
    education: Education;
    relationshipStatus: RelationshipStatus;
}>;


export enum Gender {
    Male = 'male',
    Female = 'female'
}

export enum City {
    TelAviv = 'Tel Aviv',
    Jerusalem = 'Jerusalem',
    Haifa = 'Haifa',
    RishonLeZion = 'Rishon LeZion',
    PetahTikva = 'Petah Tikva',
    Ashdod = 'Ashdod',
    Netanya = 'Netanya',
    Beersheba = 'Beersheba',
    Holon = 'Holon',
    BneiBrak = 'Bnei Brak'
}

export enum Profession {
    SoftwareEngineer = 'Software Engineer',
    Teacher = 'Teacher',
    Doctor = 'Doctor',
    Lawyer = 'Lawyer',
    Accountant = 'Accountant',
    Designer = 'Designer',
    Nurse = 'Nurse',
    Salesperson = 'Salesperson',
    Electrician = 'Electrician',
    Chef = 'Chef'
}

export enum Education {
    HighSchool = 'High School',
    Bachelor = 'Bachelor\'s Degree',
    Master = 'Master\'s Degree',
    PhD = 'PhD',
    Diploma = 'Diploma',
    Certificate = 'Certificate',
    Other = 'Other'
}

export enum RelationshipStatus {
    Single = 'Single',
    Married = 'Married',
    InRelationship = 'In a Relationship',
    Other = 'Other'
}

export function validateEmail(value: string) {
    if (!value) return ('Email is required');
    if (!/^\S+@\S+$/.test(value)) return ('Invalid email');
    return null
}

export function validatePassword(value: string) {
    if (!value) return ('Password is required');
    if (value.trim().length < 4) return ('Password must be at least 6 chars')
    return null;
}

export function validateUserName(value: string) {
    if (!value) return ('Username is required');
    if (value.trim().length < 4) return ('Username must be at least 4 chars')
    if (value.trim().length > 10) return ('Username must be at less than 10 chars')
    return null;
}