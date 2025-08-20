import { IconHeart, IconBubbleText, IconShare } from "@tabler/icons-react"
import "./ArticleCard.css";

type ArticleCardProps = {
    userName:string,
    profilePicture:string,
    createdAt:Date,
    content:string,
    tags:string[]
}

export default function ArticleCard({userName, profilePicture ,createdAt, content,tags}:ArticleCardProps){

    const renderTags = () =>{
        return tags.map(tag => <div className="tag">{"#" + tag}</div>)
    }

    return(
        <div className="article-container">
            <div className="top-section">
                <div className="profile-image-container">
                    <img src={profilePicture} alt="" />
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
                    {renderTags()}
                </div>
            </div>
            <div className="bottom-section">
                <button className="like-button article-button"><IconHeart size={20}/></button>
                <button className="comment-button article-button"><IconBubbleText size={20}/></button>
                <button className="share-button article-button"><IconShare size={20}/></button>
            </div>
        </div>
    )
}