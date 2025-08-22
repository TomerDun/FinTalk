
import { observer } from "mobx-react-lite"
import { profileStore } from "../../../stores/ProfileStore"
import ExpenseCard from "../ExpenseCard/ExpenseCard"
import './ExpenseList.css';

function ExpensesList() {
    return (
        <div className="expenses-list-container">
            {profileStore.expenses ?
                <>
                    <div className="header-container">
                        $ Recent Expenses ({profileStore.expenses.length})
                    </div>
                    {profileStore.expenses.map((expense, i) => <ExpenseCard expense={expense} key={i} />)}
                </>
                : 
                null
            }
        </div>
    )
}

export default observer(ExpensesList);