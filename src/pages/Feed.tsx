import ArticleCard from "../components/ArticleCard/ArticleCard";


export default function Feed(){
    return(
        <ArticleCard userName='user' profilePicture='url' createdAt={new Date} content="lorem Ipsum" tags={["bla", "blabla"]}/>
    )
} 