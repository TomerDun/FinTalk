import { useState } from "react"
import {IconCirclePlus, IconFolder, IconTag} from "@tabler/icons-react"
import "./ArticleCreator.css"

export type ArticleData = {
    articleInput:string,
    selectedCategory:string,
    selectedSubCategory:string
}

type ArticalCreatorProps ={
    imageUrl:string
    handlePost:(articleData:ArticleData)=>void
}


export default function ArticleCreator({imageUrl,handlePost}:ArticalCreatorProps){
    const [articleInput, setArticleInput] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const categories = [
        {category: "Entertainment", subCategories:["Movies","Games","Theatre"]},
        {category:"Food", subCategories:["Groceries", "Dining Out", "Meal Prep"]},
        {category:"Transportation", subCategories:["Gas", "Maintenance","Public Transit"]}
    ]

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
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}>
                                {selectedCategory === "" && (
                                    <option value="" disabled>
                                        Select category
                                    </option>
                                )}
                                {categories.map((category,index) => (
                                    <option key={index} value={category.category}>
                                        {category.category}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="selection-set">
                        <label 
                            htmlFor="sub-category" 
                            className={selectedCategory === "" ? "disabled" : ""}>
                                <IconTag size={16}/>
                                <p>Sub-category</p>
                        </label>
                        <select 
                            className={selectedCategory === "" ? "disabled" : ""}
                            name="sub-category" 
                            id="sub-category"
                            value={selectedSubCategory}
                            onChange={(e) => setSelectedSubCategory(e.target.value)}>
                                <option value="">None</option>
                                {categories.find((category) => category.category === selectedCategory)?.subCategories
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
                    onClick={() => handlePost({articleInput,selectedCategory,selectedSubCategory})}>
                    <IconCirclePlus size={16} />
                    <p>Post</p>
                </button>
            </div>
        </div>
    )
}
{/* <div className="tag-input-container">
    <p>#</p>
    <input 
        type="text"
        placeholder="Add tags (comma seperated)"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}  />
</div> */}