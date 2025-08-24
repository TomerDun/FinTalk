import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ArticleCreator from "../../components/ArticleCreator/ArticleCreator";
import ArticleFilter from "../../components/ArticleFilter/ArticleFilter";
import { articleStore } from "../../stores/ArticleStore";
import { observer } from "mobx-react-lite";
import "./FeedPage.css"
import { useEffect } from "react";
import ProfileView from "../../components/ProfileArea/ProfileView/ProfileView";
import { profileStore } from "../../stores/ProfileStore";

function FeedPage(){

    useEffect(()=>{
        articleStore.getArticlesWithAuthor();
    },[])

    return(
        <div className="feed-page-container">
        <ArticleCreator/>
        <ArticleFilter/>
        {
        articleStore.filteredArticles.map((article) => {
            return <ArticleCard 
                        key={article.id}
                        userName={article.author?.userName} 
                        imgUrl={article.author?.imgUrl}
                        createdAt={article.createdAt}
                        content={article.content}
                        category={article.category}
                        subCategory={article.subCategory}/>})}
        </div>
    )
} 

export default observer(FeedPage)