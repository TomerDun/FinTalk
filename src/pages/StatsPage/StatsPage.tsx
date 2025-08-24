import { useEffect, useState } from "react"
import type { Expense } from "../../stores/ProfileStore"
import { fetchAllExpenses } from "../../utils/apiUtils/expenseApiUtils"
import SpendingInCategoryChart from "../../components/ChartsArea/GeneralCharts/SpendingInCategoryChart/SpendingInCategoryChart"

export default function StatsPage() {

    const [expenses, setExpenses] = useState<Expense[]>([])
    
    useEffect(() => {
        getExpenses();
    }, [])

    async function getExpenses() {
        const newExpenses = await fetchAllExpenses();
        setExpenses(newExpenses)   ;
    }

    if (!expenses.length) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div className="stats-page">
            <div className="header-area">
                <h1>Community Statistics</h1>
                <p>Analyze spending patterns across the community</p>
            </div>

            <div className="general-stats-area">
                General Area
            </div>

            <div className="charts-area">
                <SpendingInCategoryChart expenses={expenses} category="Food"/>
            </div>
        </div>
    )
}