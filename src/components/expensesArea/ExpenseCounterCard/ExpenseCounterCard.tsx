// TODO: Add prop for icon

import { IconCoins, IconCreditCard, IconCurrencyDollar, IconEqual, IconMinus, IconMoneybag, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import './ExpenseCounterCard.css'
import type { JSX } from "react"
import CountUp from "../../MiscArea/CountUp/CountUp"

type ExpenseCounterCardProps = {
    title: string,
    amount: number,
    changeAmount?: number,
    changeText?: string,
    theme?: string,
    currency?: string,
}

const themeIcons: { [key: string]: JSX.Element } = {
    'coins': <IconCoins />,
    'credit': <IconCreditCard />,
    'dollar': <IconCurrencyDollar />,
    'bag': <IconMoneybag  />
}

export default function ExpenseCounterCard({ title, amount, changeAmount, changeText, theme = 'dollar', currency='' }: ExpenseCounterCardProps) {

    return (
        <div className="expense-counter">
            <div className="content-col">
                <span className="title">{title}</span>
                {/* <span className="amount">{amount} {currency}</span> */}
                <CountUp to={amount} className="amount"/>
                <span className="amount"> {currency}</span>
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
                        {/* <span>{changeAmount}% {changeText}</span> */}
                        {
                            <>
                            <CountUp to={changeAmount} />
                            <span>% {changeText}</span>
                            </>
                        }
                    </div>
                }

            </div>

            <div className="symbol-col">
                <div className={`symbol symbol-${theme}`}>
                    {
                        themeIcons[theme]
                    }
                </div>
            </div>

        </div>
    )
}