import { supabase } from "./supabaseUtils";

export async function fetchProfile(id=1) {
    const {data, error} = await supabase.from('profiles').select('*').eq('id', id);

    if(error) {
        console.error('Supabase error when fetching profile: ', error)
        return error;
    }
    console.log('--fetched profile with id ', id);   
    console.log(data);
    
    return data[0];
}