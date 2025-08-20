// Types

import { makeAutoObservable } from "mobx"

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
    expenses: Expense[] | null = [];
    

    constructor() {
        makeAutoObservable(this)
    }
}