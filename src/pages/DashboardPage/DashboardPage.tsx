import { useEffect } from "react";
import ExpensesList from "../../components/exponsesArea/ExpensesList/ExpensesList";
import { observer } from "mobx-react-lite";
import { fetchProfile } from "../../utils/apiUtils/profileApiUtils";
import { fetchProfileExpenses } from "../../utils/apiUtils/expenseApiUtils";

function DashboardPage() {    
    useEffect(() => {
        fetchProfile();
        fetchProfileExpenses();
    }, [])
    return (

        <div className="dashboard-page">
            <div className="header-area">
                <div className="greeting-container">
                    <h1>Welcome Back, PROFILE NAME</h1>
                    <span>Here is you overview</span>
                </div>

                <div className="expenses-list container">
                    <ExpensesList expenses={[]}/>
                </div>
            </div>
        </div>

    )
}

export default observer(DashboardPage)