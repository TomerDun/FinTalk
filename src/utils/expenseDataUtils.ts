import type { Expense } from "../stores/ProfileStore";
import { formatExpensesByDate } from "./hooks/chartFormatUtils";

export type ExpensesByDates = {
    [key: string]: number;
}

// {16.9: 500, 17.8: 200}

export type ExpensesByDateData = {
    date: string
    amount: number
}

export function groupExpensesByDate(expenses: Expense[]): ExpensesByDateData[] {
    const expenseByDates:ExpensesByDates = expenses.reduce<ExpensesByDates>((acc, expense) => {
        if (acc[expense.date.toDateString()]) {
            acc[expense.date.toDateString()] += expense.amount;
        } else {
            acc[expense.date.toDateString()] = expense.amount;
        }
        return acc;
    }, {});

    return formatExpensesByDate(expenseByDates)
}