import type { Expense } from "../stores/ProfileStore";
import { fillMissingCategories, formatExpensesByDate } from "./hooks/chartFormatUtils";

export type ExpensesByDates = {
    [key: string]: number;
}

// {16.9: 500, 17.8: 200}

export type ExpensesByDateData = {
    date: string
    amount: number
}

export type ExpensesByDateAndCategory = {
    date: string;
    [category: string]: number | string; // dynamic category keys
};


// total amount by date
export function groupExpensesByDate(expenses: Expense[]): ExpensesByDateData[] {
    const expenseByDates: ExpensesByDates = expenses.reduce<ExpensesByDates>((acc, expense) => {
        if (acc[expense.date.toDateString()]) {
            acc[expense.date.toDateString()] += expense.amount;
        } else {
            acc[expense.date.toDateString()] = expense.amount;
        }
        return acc;
    }, {});

    return formatExpensesByDate(expenseByDates)
}


// Total amount by date and category
export function groupExpensesByDateAndCateogry(expenses: Expense[], fill=true): ExpensesByDateAndCategory[] {
    const groupedMap = new Map<string, Record<string, number>>();

    for (const exp of expenses) {
        const dateKey = exp.date.toDateString(); // YYYY-MM-DD
        const categoryTotals = groupedMap.get(dateKey) ?? {};

        categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
        groupedMap.set(dateKey, categoryTotals);
    }

    // Convert Map to array of objects with 'date' included
    const output = Array.from(groupedMap.entries()).map(([date, categories]) => ({
        date,
        ...categories,
    }));

    if (fill) {
        return fillMissingCategories(output);        
    }
    return output;
}