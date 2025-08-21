import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ArticleCreator from "../../components/ArticleCreator/ArticleCreator";
import ArticleFilter from "../../components/ArticleFilter/ArticleFilter";
import { articleStore } from "../../stores/ArticleStore";
import { observer } from "mobx-react-lite";
import "./FeedPage.css"

function FeedPage(){
    return(
        <div className="feed-page-container">
        <ArticleCreator imgUrl="url"/>
        <ArticleFilter/>
        { 
        articleStore.filteredArticles.map((article,index) => {
            return <ArticleCard 
                        key={index}
                        userName={article.author.userName} 
                        imgUrl={article.author.imgUrl}
                        createdAt={article.createdAt}
                        content={article.content}
                        category={article.category}
                        subCategory={article.subCategory}/>})}
        </div>
    )
} 

export default observer(FeedPage)