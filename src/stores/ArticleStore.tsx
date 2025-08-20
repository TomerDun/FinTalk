import { makeAutoObservable } from "mobx";


class ArticleStore {
    articles = [];
    userName = "";

    constructor(){
        makeAutoObservable(this);
    }

    
}