import { supabase } from "./supabaseUtils";

// export async function loginUser(email: string = 'rich@money.gov', password: string = 'lovemoney5') {
export async function loginUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) 
        throw error;

    return data;
}

export async function logoutUser() {
    await supabase.auth.signOut();
}