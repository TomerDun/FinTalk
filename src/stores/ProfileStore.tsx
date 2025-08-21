// Types

import { makeAutoObservable, runInAction } from "mobx"
import { fetchProfile } from "../utils/apiUtils/profileApiUtils";

export type Profile = {
    id?: number,
    userId: number,
    userName: string,
    imgUrl?: string,    
}

export type Expense = {
    id?: number,
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

    constructor() {
        makeAutoObservable(this)
    }
}

export const profileStore = new ProfileStore()