import type { Expense } from "../../../stores/ProfileStore"
import { IconCalendarEvent, IconTag } from "@tabler/icons-react"
import './ExpenseCard.css'


type ExpenseCardProps = {
    expense: Expense
}

export default function ExpenseCard({ expense }: ExpenseCardProps) {
    return (
        <div className="expense-container hover-shadow">
            <div className="header-row">
                <span className="exp-name">{expense.title}</span>
                <span className="exp-amount">{expense.amount} $</span>
            </div>

            <div className="bottom-row">
                <span className="created">
                    <IconCalendarEvent size={16} />
                    Sep 16, 25
                </span>
                <div className="categories">
                    <span className="category">
                        <IconTag size={16} />
                        {expense.category}
                    </span>
                    <span>
                        <IconTag size={16}/>
                        {expense.subCategory}
                    </span>
                </div>
            </div>
        </div>
    )
}