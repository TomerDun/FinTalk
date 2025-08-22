export async function loginUser(email: string = 'rich@money.gov', password: string = 'lovemoney5') {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
}