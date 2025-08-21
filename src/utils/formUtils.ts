
import type { UseFormReturnType } from "@mantine/form";

export function validateRegisterFormByStep(form: RegisterFormType, step: number) {
    switch (step) {
        case 2:
            const emailValid = form.validateField('email')
            const pwdValid = form.validateField('password');
            return emailValid.hasError || pwdValid.hasError
        case 3:
            const nicknameValid = form.validateField('nickname')
            const genderValid = form.validateField('gender')
            const ageValid = form.validateField('age')
            const cityValid = form.validateField('city');
            return nicknameValid.hasError || genderValid.hasError || ageValid.hasError || cityValid.hasError;
        case 4:
            const professionValid = form.validateField('profession')
            const statusValid = form.validateField('status')
            return professionValid.hasError || statusValid.hasError;
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
    nickname: string;
    age: number;
    gender: Gender;
    city: City;
    profession: Profession;
    status: Status;
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

export enum Status {
    Single = 'Single',
    Married = 'Married',
    InRelationship = 'In a Relationship',
    Other = 'Other'
}