import { observer } from "mobx-react-lite";
import ExpensesList from "../../components/exponsesArea/ExpensesList/ExpensesList";
import { useEffect } from "react";
import { profileStore } from "../../stores/ProfileStore";

function DashboardPage() {

    useEffect(() => {
        profileStore.getExpenses();
    }, [])

    return (



        <div className="dashboard-page">
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