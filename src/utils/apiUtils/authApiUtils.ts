import { supabase } from "./supabaseUtils";

// export async function loginUser(email: string = 'rich@money.gov', password: string = 'lovemoney5') {
export async function loginUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) 
        throw error;

    
    console.log('--logged in user from apiUtils--', data);
    return data;
}

export async function logoutUser() {
    await supabase.auth.signOut();
    console.log('--logged out user from apiUtils--');
    
}

// Returns user if logged in, else false
export async function checkUser() {
    const {data, error} = await supabase.auth.getUser();    
    return data.user;
}

