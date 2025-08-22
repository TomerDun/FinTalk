import { observer } from "mobx-react-lite";
import ExpensesList from "../../components/expensesArea/ExpensesList/ExpensesList";
import { useEffect, useState } from "react";
import { profileStore } from "../../stores/ProfileStore";
import ExpenseCreator from "../../components/expensesArea/ExpenseCreator/ExpenseCreator";

function DashboardPage() {
    const [creatorOpen, setCreatorOpen] = useState(false);

    useEffect(() => {
        profileStore.getExpenses();
    }, [])

    return (
        <div className="dashboard-page">
            {creatorOpen ?
                <ExpenseCreator setCreatorOpen={setCreatorOpen}/>
                :
                <button className="add-expense-button" onClick={() => setCreatorOpen(true)}> + Add New Expense</button>
            }
            <div className="header-area">
                <div className="greeting-container">
                    <h1>Welcome Back, {profileStore.activeProfile ? profileStore.activeProfile.userName : '...'}</h1>
                    <span>Here is you overview</span>
                </div>

                <div className="expenses-list container">
                    <ExpensesList />
                </div>
            </div>
        </div>

    )
}

export default observer(DashboardPage)