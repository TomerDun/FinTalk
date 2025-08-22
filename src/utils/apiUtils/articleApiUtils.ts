import type { Article } from "../../stores/ArticleStore";
import type { ArticleInput } from "../../components/ArticleCreator/ArticleCreator";
import { supabase } from "./supabaseUtils";


export async function fetchAllArticles():Promise<Article[]>{
    const { data, error } = await supabase
        .from('articles')
        .select('*');

    if (error) {
        console.error('Error fetching all articles', error);
        throw error;
    }

    console.log('--fetched all articles');

    return (data ?? []) as Article[];
}

// TEMP - Change any type to ArticleInsert type
export async function insertArticle(newArticle:ArticleInput) {
    const {error} = await supabase.from('articles').insert(newArticle);
    if (error) {
        console.error('Error adding article, ', error);
        return error;        
    }
    console.log('--succesfully added article');
    return true;
}
