import { makeAutoObservable, runInAction } from "mobx";
import type { ArticleData } from "../components/ArticleCreator/ArticleCreator";

export type articleAuther = {
    userName:string
    imgUrl:string
}

export type Article = {
    author:articleAuther
    profileId:number
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
    
    async fetchArticles(url:string){
        this.loading = true;
        const response = await fetch(url);
        if(!response.ok){
            runInAction(() => {
                this.loading = false;
            })
            throw Error("article response not ok");
        }
        const data = await response.json();
        runInAction(() => {
            this.articles = data;
            this.loading = false;
        })
    }

    addArticle(article:ArticleData){
        this.articles.push({...article, author:{userName:"user", imgUrl:"url"}, profileId:1})
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