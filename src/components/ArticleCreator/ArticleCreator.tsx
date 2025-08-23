import { useState } from "react"
import {IconCirclePlus, IconFolder, IconTag} from "@tabler/icons-react"
import "./ArticleCreator.css"
import { articleStore } from "../../stores/ArticleStore"
import { profileStore } from "../../stores/ProfileStore"
import { observer } from "mobx-react-lite"
import { Select } from "@mantine/core"

export type ArticleInput = {
    profileId:number,
    content:string,
    category:string|null,
    subCategory:string|null,
    createdAt:Date
}


function ArticleCreator(){
    const [content, setContent] = useState("");
    const [category, setCategory] = useState<string|null>("");
    const [subCategory, setSubCategory] = useState<string|null>("");
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

    const mainCategories = categories.map(category => category.cat);

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
                    {/* <div className="selection-set"> */}
                        <Select
                            classNames={{input:"mantine-select"}}
                            w={"100%"}
                            searchable
                            label={
                                <div className="category-label-container">
                                    <IconFolder/>
                                    <p>Category</p>
                                </div>
                                }
                            data={mainCategories}
                            value={category}
                            onChange={setCategory}
                        />
                    <Select
                    classNames={{input:"mantine-select"}}
                    searchable
                    w={"100%"}
                    label={
                        <div className="category-label-container">
                            <IconTag/>
                            <p>Sub Category</p>
                        </div>
                        }
                    data={
                        categories.find((c) => c.cat === category)?.subCats 
                        }
                    value={subCategory}
                    onChange={setSubCategory}
                />
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