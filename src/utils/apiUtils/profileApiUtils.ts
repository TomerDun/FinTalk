import { supabase } from "./supabaseUtils";

// export async function fetchProfile(userId = 'c7f9877b-7b48-4b13-a2e7-9c83f24bfd63') {
export async function fetchProfile(userId: string) {
    try {
        console.log('feching Profile');
        console.log(userId==='c7f9877b-7b48-4b13-a2e7-9c83f24bfd63');
        const { data, error } = await supabase.from('profiles').select('*').eq('userId', userId);
        console.log('try fetchedProfile');
        if (error) {
            console.error('Supabase error when fetching profile: ', error)
            return error;
        }
        console.log('--fetched profile with id ', userId);
        console.log(data);
        
        return data[0];
    } catch (error) {
        console.log('error');
    }
}
