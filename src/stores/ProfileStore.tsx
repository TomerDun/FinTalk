// --TEMP--
const expensesData:Expense[] = [
    {
        id: 1,
        profileId: 5,
        amount: 500,
        category: 'Car',
        subCategory: 'Fuel',
        createdAt: new Date()
    },
    {
        id: 2,
        profileId: 5,
        amount: 1500,
        category: 'Car',
        subCategory: 'Repairs',
        createdAt: new Date()
    },
    {
        id: 3,
        profileId: 5,
        amount: 700,
        category: 'Food',
        subCategory: 'Restraunt',
        createdAt: new Date()
    },
]


// Types

import { makeAutoObservable, runInAction } from "mobx"
import { fetchProfile } from "../utils/apiUtils/profileApiUtils";
import { fetchProfileExpenses } from "../utils/apiUtils/expenseApiUtils";

export type Profile = {
    id?: number,
    userId: number,
    userName: string,
    imgUrl?: string,    
}

export type Expense = {
    id?: number,
    title: string,
    createdAt: Date,
    profileId: number,
    amount: number,
    category: string, //maybe change to enum later?
    subCategory: string, //maybe change to enum later?
}

class ProfileStore {
    activeProfile:Profile | null = null
    expenses: Expense[] | null = [];
    
    async getActiveProfile() {
        const newProfile = await fetchProfile();
        
        
        runInAction(() => {
            this.activeProfile = newProfile;            
        })

        console.log('--updated user profile--');
        
        
    }

    async getExpenses() {
        const newExpenses = await fetchProfileExpenses(this.activeProfile?.id);

        runInAction(() => {
            this.expenses = newExpenses;
            console.log('--fetched expenses: ', newExpenses);
            
        })
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export const profileStore = new ProfileStore()