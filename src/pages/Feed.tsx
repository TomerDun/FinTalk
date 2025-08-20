import ArticleCard from "../components/ArticleCard/ArticleCard";
import ArticleCreator from "../components/ArticleCreator/ArticleCreator";
import { useState } from "react";

export default function Feed(){
    const [articles, setArticles] = useState([]);
    return(
        <>
        <ArticleCreator imageUrl="url"/>
        <ArticleCard userName='user' profilePicture='url' createdAt={new Date} content="lorem Ipsum" tags={["bla", "blabla"]}/>
        </>
    )
} 