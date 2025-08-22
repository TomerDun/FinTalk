// TODO: Add prop for icon

import { IconCoins, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import './ExpenseCounterCard.css'

type ExpenseCounterCardProps = {
    title: string,
    amount: number,
    changeAmount?: number,
    isPositive?: boolean,
    changeText?: string,
}

export default function ExpenseCounterCard({ title, amount, changeAmount, isPositive, changeText }: ExpenseCounterCardProps) {
    return (
        <div className="expense-counter">
            <div className="content-col">
                <span className="title">{title}</span>
                <span className="amount">{amount}$</span>
                {changeAmount !== undefined &&
                    <div className={`change ${isPositive ? 'positive-text' : 'negative-text'}`}>
                        {isPositive ?
                            <IconTrendingUp size={16} />
                            :
                            <IconTrendingDown size={16} />
                        }
                        <span>{changeAmount}% {changeText}</span>
                    </div>
                }

            </div>

            <div className="symbol-col">
                <div className="symbol">
                    <IconCoins />
                </div>
            </div>

        </div>
    )
}