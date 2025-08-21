import { supabase } from "./supabaseUtils";

export async function fetchAllArticles() {
    const {data, error} = await supabase.from('articles').select('*');

    if(error) {
        console.error('Error fetching all articles', error)
        return error;
    }

    console.log('--fetched all articles  ');       
    
    return data;
}

// TEMP - Change any type to ArticleInsert type
export async function insertArticle(newArticle:any) {
    const {error} = await supabase.from('articles').insert(newArticle);
    if (error) {
        console.error('Error adding article, ', error);
        return error;        
    }
    console.log('--succesfully added article');
    return true;
}
