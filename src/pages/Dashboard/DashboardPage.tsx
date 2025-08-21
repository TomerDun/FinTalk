import ExpensesList from "../../components/exponsesArea/ExpensesList/ExpensesList";

export default function DashboardPage() {
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