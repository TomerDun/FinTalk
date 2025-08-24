import type { ExpenseInput } from "../../stores/ProfileStore";
import { formatDates, supabase } from "./supabaseUtils";

export async function fetchProfileExpenses(profileId=1) {
    const {data, error} = await supabase.from('expenses').select('*').eq('profileId', profileId);

    // TODO: check what you should return in case of an erorr (what is the correct typescript way)
    if(error) {
        // console.error('Supabase error when fetching profile expenses: ', error)
        return [];
    }

    console.log('--fetched expenses for profile  ', profileId);   
    console.log(data);

    formatDates(data, 'date');
    
    return data;
}

// TEMP - Change any type to ExpenseInsert type
export async function insertExpense(newExpense:ExpenseInput) {
    const {error} = await supabase.from('expenses').insert(newExpense);
    if (error) {
        // console.error('Error adding expense, ', error);
        return error;        
    }
    // console.log('--succesfully added expense');
    return true;
}