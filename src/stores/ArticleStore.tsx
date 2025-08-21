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
}

export const articleStore = new ArticleStore;