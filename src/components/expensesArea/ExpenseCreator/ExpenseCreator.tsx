import { useState } from "react"
import { Select } from "@mantine/core";
import { IconFolder, IconTag } from "@tabler/icons-react";
import "./ExpenseCreator.css"
import { fetchProfileExpenses, insertExpense } from "../../../utils/apiUtils/expenseApiUtils";

export default function ExpenseCreator({ setCreatorOpen }: { setCreatorOpen: (open: boolean) => void }) {

    const [amount, setAmount] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState<string|null>("");
    const [subCategory, setSubCategory] = useState<string|null>("");

    const categories = [
        {cat: "Entertainment", subCats:["Movies","Games","Theatre"]},
        {cat:"Food", subCats:["Groceries", "Dining Out", "Meal Prep"]},
        {cat:"Transportation", subCats:["Gas", "Maintenance","Public Transit"]}
    ]

    const handleAddExpense = async () => {
        setAmount("");
        setTitle("");
        setDate("");
        setCategory("");
        setSubCategory("");
        await insertExpense({amount,title,date,category,subCategory,profileId:1});
    }

    const mainCategories = categories.map(category => category.cat);

    return (
        <div className="expense-creator-container">
            <div className="amount-field-container">
                <label htmlFor="amount">Amount</label>
                <input 
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00" />
            </div>
            <div className="title-date-section">
                <div className="title-field-set field-set">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="What did you do this time...?" />
                </div>
                <div className="date-field-set field-set">
                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}/>
                </div>
            </div>
            <div className="category-section">
                <Select
                    w={"50%"}
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
                    searchable
                    w={"50%"}
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
            <div className="bottom-section">
                <button 
                    className="cancel-button"
                    onClick={() => setCreatorOpen(false)}>
                        Cancel
                </button>
                <button 
                    className="add-button"
                    onClick={handleAddExpense}>Add Expense</button>
            </div>

        </div>
    )
}