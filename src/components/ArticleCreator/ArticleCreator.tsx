import { useState } from "react"
import {IconCirclePlus} from "@tabler/icons-react"
import "./ArticleCreator.css"

type ArticalCreatorProps ={
    imageUrl:string
}


export default function ArticleCreator({imageUrl}:ArticalCreatorProps){
    const [articleInput, setArticleInput] = useState("");
    const [tagInput, setTagInput] = useState("");

    return(
        <div className="creator-container">
            <div className="top-section">
                <div className="profile-image-container">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="creator-header">Share your financial insights</div>
            </div>
            <div className="main-container">
                <div className="text-area-container">
                    <textarea 
                        name="article-input" 
                        id="article-input" 
                        placeholder="What's on your mind?"
                        value={articleInput}
                        onChange={(e) => setArticleInput(e.target.value)}
                        >
                    </textarea>
                </div>
                <div className="tag-input-container">
                    <p>#</p>
                    <input 
                        type="text"
                        placeholder="Add tags (comma seperated)"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}  />
                </div>
            </div>
            <div className="bottom-section">
                <button className="post-article-button">
                    <IconCirclePlus size={16} />
                    <p>Post</p>
                </button>
            </div>
        </div>
    )
}