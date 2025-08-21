
import { observer } from "mobx-react-lite"
import { profileStore } from "../../../stores/ProfileStore"
import ExpenseCard from "../ExpenseCard/ExpenseCard"
import './ExpenseList.css';

function ExpensesList() {
    return (
        <div className="expenses-list-container">
            <div className="header-container">
                $ Recent Expenses ({profileStore.expenses.length})
            </div>
            {profileStore.expenses.map((ex, i) => <ExpenseCard expense={ex} key={i}/>)}
        </div>
    )
}

export default observer(ExpensesList);