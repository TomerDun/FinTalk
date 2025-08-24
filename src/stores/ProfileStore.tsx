// Types

import { makeAutoObservable, runInAction } from "mobx";
import { fetchProfileExpenses, insertExpense } from "../utils/apiUtils/expenseApiUtils";
import { fetchProfile } from "../utils/apiUtils/profileApiUtils";
import { loginUser, logoutUser } from "../utils/apiUtils/authApiUtils";
import { supabase } from "../utils/apiUtils/supabaseUtils";

export type Profile = {
    id: number,
    userId: number,
    userName: string,
    imgUrl?: string,
    email:string
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
    date?: Date,
    profileId: number,
    amount: number|undefined|null,
    category: string | null, //maybe change to enum later?
    subCategory?: string | null, //maybe change to enum later?   
}

class ProfileStore {
    activeProfile: Profile | null | undefined = undefined // undefined: not loaded yet | null: user is not logged in | Profile: user is logged in
    expenses: Expense[] = [];


    constructor() {
        makeAutoObservable(this)
    }

    // TODO: Add error handling
    async getActiveProfile(userId: string) {     

        const newProfile = await fetchProfile(userId);

        runInAction(() => {
            this.activeProfile = newProfile;

        })        
    }

    logoutProfile() {        
        this.activeProfile = null;
        console.log('--user profile loggedOut--');
    }

    async getExpenses() {
        const newExpenses = await fetchProfileExpenses(this.activeProfile?.id);

        runInAction(() => {
            this.expenses = newExpenses;
            // console.log('--fetched expenses: ', newExpenses);
        })
    }

    async addExpense(newExpense: ExpenseInput) {
        if (! await insertExpense(newExpense)) {
            throw Error("Error adding expense")
            console.error('Error adding expense');
        }

        this.getExpenses();
    }

    // -- Computed Values --

    get expenseSum() {
        return this.expenses?.reduce((sum, curr) => sum += curr.amount, 0);
    }

    get expenseAvg() {
        return this.expenseSum / this.expenses.length
    }


}

export const profileStore = new ProfileStore()