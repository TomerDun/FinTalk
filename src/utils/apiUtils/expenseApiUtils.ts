import type { ExpenseInput } from "../../stores/ProfileStore";
import { formatDates, supabase } from "./supabaseUtils";

// -- Profile Specific Expenses --

export async function fetchProfileExpenses(profileId = 1) {
    const { data, error } = await supabase.from('expenses').select('*').eq('profileId', profileId);

    // TODO: check what you should return in case of an erorr (what is the correct typescript way)
    if (error) {
        // console.error('Supabase error when fetching profile expenses: ', error)
        return [];
    }

    formatDates(data, 'date');

    return data;
}

// TEMP - Change any type to ExpenseInsert type
export async function insertExpense(newExpense: ExpenseInput) {
    const { error } = await supabase.from('expenses').insert(newExpense);
    if (error) {
        // console.error('Error adding expense, ', error);
        return error;
    }
    // console.log('--succesfully added expense');
    return true;
}


// -- General Expenses --

export async function fetchAllExpenses(filterKey: null | string = null, filterValue: null | string = null) {
    let data: any;
    let error: any;
    if (!filterValue || !filterKey) {
        ({ data, error } = await supabase.from('expenses').select('*'));
    }
    else {
        ({ data, error } = await supabase.from('expenses').select('*').eq(filterKey, filterValue));
    }

    // TODO: check what you should return in case of an erorr (what is the correct typescript way)
    if (error) {
        // console.error('Supabase error when fetching profile expenses: ', error)
        return [];
    }

    formatDates(data, 'date');

    return data;
}