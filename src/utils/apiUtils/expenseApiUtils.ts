import { supabase } from "./supabaseUtils";

export async function fetchProfileExpenses(profileId=1) {
    const {data, error} = await supabase.from('expenses').select('*').eq('profileId', profileId);

    if(error) {
        console.error('Supabase error when fetching profile expenses: ', error)
        return error;
    }
    
    console.log('--fetched expenses for profile  ', profileId);   
    console.log(data);
    
    return data;
}
