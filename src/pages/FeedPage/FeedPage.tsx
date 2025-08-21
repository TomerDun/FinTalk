import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ArticleCreator from "../../components/ArticleCreator/ArticleCreator";
import { useState } from "react";
import {type ArticleData } from "../../components/ArticleCreator/ArticleCreator";

export default function FeedPage(){
    const [articles, setArticles] = useState([]);
    const handleArticlePost = (articleData:ArticleData) =>{
        // setArticles(articles.concat({articleData}))
    }
    return(
        <>
        <ArticleCreator imageUrl="url" handlePost={handleArticlePost}/>
        <ArticleCard userName='user' imgUrl='url' createdAt={new Date} content="lorem Ipsum" category="blee" subCategory="bla" />
        </>
    )
} 