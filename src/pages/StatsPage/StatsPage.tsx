import { useEffect, useState } from "react"
import type { Expense } from "../../stores/ProfileStore"
import { fetchAllExpenses } from "../../utils/apiUtils/expenseApiUtils"
import SpendingInCategoryChart from "../../components/ChartsArea/GeneralCharts/SpendingInCategoryChart/SpendingInCategoryChart"
import CategorySplitChart from "../../components/ChartsArea/GeneralCharts/CategorySplitChart/CategorySplitChart"
import './StatsPage.css'
import { IconCurrencyDollar, IconTrendingUp, IconUser } from "@tabler/icons-react"
import CountUp from "../../components/MiscArea/CountUp/CountUp"
import { fetchProfileCount } from "../../utils/apiUtils/profileApiUtils"

export default function StatsPage() {

    const [expenses, setExpenses] = useState<Expense[]>([])
    const [profileCount, setProfileCount] = useState<number | null>(null);

    useEffect(() => {
        getExpenses();
        getProfileCount();
    }, [])

    const expensesTotal: number | null = expenses.length ? expenses.reduce((sum, curr) => sum += curr.amount, 0) : null

    async function getExpenses() {
        const newExpenses = await fetchAllExpenses();
        setExpenses(newExpenses);
    }

    async function getProfileCount() {
        const newCount = await fetchProfileCount();
        setProfileCount(newCount)
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
                {expenses &&
                    <>

                        <div className="stat-container">
                            <IconTrendingUp size={52} color="#3b82f6" />
                            {expensesTotal && <CountUp to={expensesTotal} className="amount" /> }
                            <span>Total Spent</span>
                        </div>


                        <div className="stat-container">
                            <IconCurrencyDollar size={52} color="rgb(16,185,129)" />
                            <CountUp to={expenses.length} className="amount" />
                            <span>Transactions Recorded</span>
                        </div>

                        <div className="stat-container">
                            <IconUser size={52} color="#a855f7" />

                            {profileCount && <CountUp to={profileCount} className="amount" />}

                            <span>Users in the community</span>

                        </div>
                    </>
                }
            </div>

            <div className="charts-area">
                <SpendingInCategoryChart />

                <CategorySplitChart expenses={expenses} />
            </div>
        </div>
    )
}