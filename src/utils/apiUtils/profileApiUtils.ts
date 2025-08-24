import { supabase } from "./supabaseUtils";

// export async function fetchProfile(userId = 'c7f9877b-7b48-4b13-a2e7-9c83f24bfd63') {
export async function fetchProfile(userId = "c7f9877b-7b48-4b13-a2e7-9c83f24bfd63") {
    const { data, error } = await supabase.from('profiles').select('*').eq('userId', userId);

    if (error) {
        console.error('Supabase error when fetching profile: ', error)
        return error;
    }
    console.log('--fetched profile with id ', userId);

    return data[0];
}

export async function fetchProfileCount() {
    const { count, error } = await supabase.from('profiles').select('*', {count: 'exact'})

    if (error) {
        console.error('Supabase error when fetching profile: ', error)
        throw new Error('Error fetching profile count')
    }    

    console.log(count);
    
    return count;
}
