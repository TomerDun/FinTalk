import { makeAutoObservable, runInAction } from "mobx";

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

    addArticle(article:Article){
        this.articles.push(article)
    }
}

export const articleStore = new ArticleStore;