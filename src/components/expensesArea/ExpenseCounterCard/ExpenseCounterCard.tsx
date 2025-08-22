// TODO: Add prop for icon

import { IconCoins, IconEqual, IconMinus, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import './ExpenseCounterCard.css'

type ExpenseCounterCardProps = {
    title: string,
    amount: number,
    changeAmount?: number,
    changeText?: string,
}

export default function ExpenseCounterCard({ title, amount, changeAmount, changeText }: ExpenseCounterCardProps) {

    return (
        <div className="expense-counter">
            <div className="content-col">
                <span className="title">{title}</span>
                <span className="amount">{amount}$</span>
                {changeAmount !== undefined &&
                    <div className={`change ${changeAmount > 0 ? 'positive-text' : (changeAmount < 0 && 'negative-text')}`}>
                        {changeAmount > 0 ?
                            <IconTrendingUp size={16} />
                            :
                            changeAmount < 0 ?
                                <IconTrendingDown size={16} />
                                :
                                <IconMinus size={16} />
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