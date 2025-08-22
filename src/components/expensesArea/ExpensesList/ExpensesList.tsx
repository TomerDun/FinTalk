
import { observer } from "mobx-react-lite"
import { profileStore } from "../../../stores/ProfileStore"
import ExpenseCard from "../ExpenseCard/ExpenseCard"
import './ExpenseList.css';
import AnimatedList from "../../MiscArea/AnimatedList/AnimatedList";

function ExpensesList() {
    return (
        <div className="expenses-list-container">
            {profileStore.expenses ?
                <>
                    <div className="header-container">
                        $ Recent Expenses ({profileStore.expenses.length})
                    </div>

                    <div className="list-content">
                        <AnimatedList displayScrollbar={true} showGradients={false} items={profileStore.expenses.map((expense, i) => <ExpenseCard expense={expense} key={i} />)} />
                    </div>
                </>
                :
                null
            }
        </div>
    )
}

export default observer(ExpensesList);