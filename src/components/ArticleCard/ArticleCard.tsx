import { IconHeart, IconBubbleText, IconShare } from "@tabler/icons-react"
import "./ArticleCard.css";

interface ArticleCardProps {
    userName:string
    imgUrl:string
    createdAt:Date
    content:string
    category:string
    subCategory?:string
}

export default function ArticleCard({userName, imgUrl ,createdAt, content,category,subCategory}:ArticleCardProps){

    // const renderTags = () =>{
    //     return tags.map((tag,index) => <div key={index} className="tag">{"#" + tag}</div>)
    // }

    return(
        <div className="article-container">
            <div className="top-section">
                <div className="profile-image-container">
                    <p>U</p>
                    <img src={imgUrl} alt="" />
                </div>
                <div className="name-date-container">
                    <div className="user-name">{userName}</div>
                    <div className="date">{createdAt.toLocaleDateString()}</div>
                </div>
            </div>
            <div className="main-container">
                <div className="content-container">
                    <div className="content">{content}</div>
                </div>
                <div className="tag-container">
                    <div className="tag">{category}</div>
                    {subCategory && <div className="tag">{subCategory}</div>}
                </div>
            </div>
            <div className="bottom-section">
                <button className="like-button article-button"><IconHeart size={16}/> <p>0</p></button>
                <button className="comment-button article-button"><IconBubbleText size={16}/><p>0</p></button>
                <button className="share-button article-button"><IconShare size={16}/></button>
            </div>
        </div>
    )
}