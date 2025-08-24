// Types

import { makeAutoObservable, runInAction } from "mobx";
import { fetchProfileExpenses, insertExpense } from "../utils/apiUtils/expenseApiUtils";
import { fetchProfile } from "../utils/apiUtils/profileApiUtils";
import { loginUser, logoutUser } from "../utils/apiUtils/authUtils";
import { supabase } from "../utils/apiUtils/supabaseUtils";

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
    date?: Date,
    profileId: number,
    amount: number,
    category: string, //maybe change to enum later?
    subCategory?: string, //maybe change to enum later?   
}

class ProfileStore {
    activeProfile: Profile | null = null
    expenses: Expense[] = [];
    isLoggedIn = false;


    constructor() {
        makeAutoObservable(this)
    }

    async getActiveProfile(userId: string) {
        console.log('profileStore - getActiveProfile, user ID: ', userId);

        const newProfile = await fetchProfile(userId);
        // const { data, error } = await supabase.auth.getSession();
        // console.log(data);


        runInAction(() => {
            this.activeProfile = newProfile;
            this.isLoggedIn = true;

        })

        console.log('--updated user profile--');
    }

    async loginProfile(email: string, password: string) {
        try {
            const user = await loginUser(email, password);

            runInAction(() => {
                this.isLoggedIn = true;
            })
            console.log('--user profile logged in--');
        } catch (error) {
            console.log('profileStore - login failed: ', error);
        }
    }

    logoutProfile() {
        this.isLoggedIn = false;
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