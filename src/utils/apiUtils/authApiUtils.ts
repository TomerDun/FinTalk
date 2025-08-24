import { profileStore } from "../../stores/ProfileStore";
import { fetchProfile } from "./profileApiUtils";
import { supabase } from "./supabaseUtils";

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
    const { data, error } = await supabase.auth.getUser();

    return data.user;
}

export async function createUser(email: string, password: string) {
    console.log('creating user');
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        console.log('error in creating user');
        throw error;
    }

    console.log('created new user: ', data.user);
    if (data.user) {
        await profileStore.getActiveProfile(data.user.id);
    }
    return (data.user)
}

