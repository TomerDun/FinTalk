import { useState } from "react"
import {IconCirclePlus, IconFolder, IconTag} from "@tabler/icons-react"
import "./ArticleCreator.css"
import { articleStore } from "../../stores/ArticleStore"
import { profileStore } from "../../stores/ProfileStore"
import { observer } from "mobx-react-lite"

export type ArticleInput = {
    profileId:number,
    content:string,
    category:string,
    subCategory:string
    createdAt:Date
}


function ArticleCreator(){
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const categories = [
        {cat: "Entertainment", subCats:["Movies","Games","Theatre"]},
        {cat:"Food", subCats:["Groceries", "Dining Out", "Meal Prep"]},
        {cat:"Transportation", subCats:["Gas", "Maintenance","Public Transit"]}
    ]

    const handleArticlePost = () => {
        setContent("");
        setCategory("");
        setSubCategory("");
        if(profileStore.activeProfile){
            articleStore.postArticle({
                            content,
                            category,
                            subCategory,
                            createdAt:new Date,
                            profileId:profileStore.activeProfile.id})
        }
    }

    return(
        <div className="creator-container">
            <div className="top-section">
                <div className="profile-image-container">
                    {profileStore.activeProfile?.imgUrl ? 
                    <img src={profileStore.activeProfile?.imgUrl} alt="" /> :
                    <p>U</p>
                    }
                    
                </div>
                <div className="creator-header">Share your financial insights</div>
            </div>
            <div className="main-container">
                <div className="text-area-container">
                    <textarea 
                        name="article-input" 
                        id="article-input" 
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        >
                    </textarea>
                </div>
                <div className="category-section">
                    <div className="selection-set">
                        <label 
                            htmlFor="category">
                                <IconFolder size={16}/>
                                <p>Category</p>
                        </label>
                        <select 
                            name="category" 
                            id="category" 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                                {category === "" && (
                                    <option value="" disabled>
                                        Select category
                                    </option>
                                )}
                                {categories.map((category,index) => (
                                    <option key={index} value={category.cat}>
                                        {category.cat}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="selection-set">
                        <label 
                            htmlFor="sub-category" 
                            className={category === "" ? "disabled" : ""}>
                                <IconTag size={16}/>
                                <p>Sub-category</p>
                        </label>
                        <select 
                            className={category === "" ? "disabled" : ""}
                            name="sub-category" 
                            id="sub-category"
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}>
                                <option value="">None</option>
                                {categories.find((c) => c.cat === category)?.subCats
                                .map((sub,ind) => (
                                    <option key={ind} value={sub}>
                                        {sub}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <button 
                    className="post-article-button"
                    disabled= {!content.length || !category}
                    onClick={() => handleArticlePost()}>
                    <IconCirclePlus size={16} />
                    <p>Post</p>
                </button>
            </div>
        </div>
    )
}

export default observer(ArticleCreator)