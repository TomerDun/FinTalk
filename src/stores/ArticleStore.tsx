import { makeAutoObservable, runInAction } from "mobx";
import type { ArticleInput } from "../components/ArticleCreator/ArticleCreator";
import { fetchAllArticles } from "../utils/apiUtils/articleApiUtils";
import { insertArticle } from "../utils/apiUtils/articleApiUtils";

export type articleAuther = {
    userName:string
    imgUrl:string
}

export type Article = {
    author?:articleAuther
    profileId?:number
    id:number
    title?:string
    content:string
    createdAt:Date
    category:string
    subCategory?:string
}

class ArticleStore {
    articles:Article[] = [];
    userName = "";
    loading = false;
    categories = [
        {cat: "Entertainment", subCats:["Movies","Games","Theatre"]},
        {cat:"Food", subCats:["Groceries", "Dining Out", "Meal Prep"]},
        {cat:"Transportation", subCats:["Gas", "Maintenance","Public Transit"]}
    ]
    filterCategories: string[] = [];

    constructor(){
        makeAutoObservable(this);
    }
    
    async getArticles(){
        this.loading = true;
        const response = await fetchAllArticles();
        runInAction(() => {
            this.articles = response;
            this.articles.sort((a,b) => b.id-a.id)
            this.loading = false;
        })
    }

    async postArticle(article:ArticleInput){
        if(! await insertArticle(article)){
            throw Error("article insert failed")
        }
        this.getArticles();
    }

    updateCategoryFilters = (filters: string[]) => {
        this.filterCategories = filters;
    }

    get filteredArticles() {
        if (this.filterCategories.length === 0) {
            return this.articles;
        }
        return this.articles.filter(article => {
            return this.filterCategories.includes(article.category) ||
                (article.subCategory && this.filterCategories.includes(article.subCategory));
        });
    }

}

export const articleStore = new ArticleStore;