
import { observer } from "mobx-react-lite"
import { profileStore } from "../../../stores/ProfileStore"
import ExpenseCard from "../ExpenseCard/ExpenseCard"

function ExpensesList() {
    return (
        <div className="expenses-list-container">
            {profileStore.expenses.map((ex, i) => <ExpenseCard expense={ex} key={i}/>)}
        </div>
    )
}

export default observer(ExpensesList);