import { IconFilter } from "@tabler/icons-react"
import { MultiSelect } from "@mantine/core"
import { observer } from "mobx-react-lite"
import { articleStore } from "../../stores/ArticleStore"
import "./ArticleFilter.css"

function ArticleFilter(){
    const categories:string[] = articleStore.categories.flatMap(category => 
        [category.cat, ...category.subCats]);

    return(
        <div className="filter-container">
            <div className="icon-label">
                <IconFilter size={16}/>
                <p>Filter by category:</p>
            </div>
            <MultiSelect
                searchable
                value={articleStore.filterCategories}
                checkIconPosition="right"
                data={categories}
                placeholder="Category"
                w={"90%"}
                clearable
                onChange={articleStore.updateCategoryFilters}
            />
        </div>
    )
}

export default observer(ArticleFilter)