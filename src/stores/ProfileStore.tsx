// Types

import { makeAutoObservable, runInAction } from "mobx"
import { fetchProfile } from "../utils/apiUtils/profileApiUtils";
import { fetchProfileExpenses, insertExpense } from "../utils/apiUtils/expenseApiUtils";

export type Profile = {
    id: number,
    userId: number,
    userName: string,
    imgUrl?: string,
}

export type Expense = {
    id: number,
    title: string,
    date: Date,
    profileId: number,
    amount: number,
    category: string, //maybe change to enum later?
    subCategory?: string, //maybe change to enum later?
}

export type ExpenseInput = {
    id: number,    
    date?: Date,
    profileId: number,
    amount: number,
    category: string, //maybe change to enum later?
    subCategory?: string, //maybe change to enum later?   
}

class ProfileStore {
    activeProfile: Profile | null = null
    expenses: Expense[] = [];
    loggedInUser: boolean = false;

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

    async addExpense(newExpense:ExpenseInput){
        if(! await insertExpense(newExpense)){
            throw Error("Error adding expense")
            console.error('Error adding expense');
        }
        
        this.getExpenses();
    }

    // !!!!!!!! dont remove - used for now in auth
    setUserLoggedIn() {
        this.loggedInUser = true;
        // console.log('logged in');
    }

    get expenseSum() {
        return this.expenses?.reduce((sum, curr) => sum += curr.amount, 0);
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export const profileStore = new ProfileStore()