import type { Expense } from "../../../stores/ProfileStore"
import './ExpenseCard.css'


type ExpenseCardProps = {
    expense: Expense
}

export default function ExpenseCard({expense}: ExpenseCardProps) {
    return (
        <div className="expense-container">
            <div className="header-row">
                <span className="exp-name">Expense Name</span>
                <span className="exp-amount">150$</span>
            </div>

            <div className="buttom-row">
                <span className="created">Sep 16, 25</span>
                <div className="categories-container">
                    <span>Category</span>
                    <span>Sub Category</span>
                </div>
            </div>
        </div>
    )
}