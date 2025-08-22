import { observer } from "mobx-react-lite";
import ExpensesList from "../../components/expensesArea/ExpensesList/ExpensesList";
import { useEffect, useState } from "react";
import { profileStore } from "../../stores/ProfileStore";
import ExpenseCreator from "../../components/expensesArea/ExpenseCreator/ExpenseCreator";
import ExpenseCounterCard from "../../components/expensesArea/ExpenseCounterCard/ExpenseCounterCard";
import './DashboardPage.css'

function DashboardPage() {
    const [creatorOpen, setCreatorOpen] = useState(false);

    useEffect(() => {
        profileStore.getExpenses();
    }, [])

    return (
        <div className="dashboard-page">
            {creatorOpen ?
                <ExpenseCreator setCreatorOpen={setCreatorOpen} />
                :
                <button className="add-expense-button" onClick={() => setCreatorOpen(true)}> + Add New Expense</button>
            }
            <div className="header-area">
                <div className="greeting-container">
                    <h1>Welcome Back, {profileStore.activeProfile ? profileStore.activeProfile.userName : '...'}</h1>
                    <span>Here is you overview</span>
                </div>
            </div>

            <div className="expense-counters-container">
                <ExpenseCounterCard title="Total Spent" amount={profileStore.expenseSum} />
                <ExpenseCounterCard title="Total Spent" amount={1500} changeAmount={15} changeText="from last month" />
                <ExpenseCounterCard title="Total Spent" amount={1500} changeAmount={-15} changeText="from last month" />
                <ExpenseCounterCard title="Total Spent" amount={1500} changeAmount={0} changeText="from last month" />
            </div>

            <div className="expenses-list container">
                <ExpensesList />
            </div>
        </div>

    )
}

export default observer(DashboardPage)