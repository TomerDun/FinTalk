import type { Expense } from "../stores/ProfileStore";
import { fillMissingCategories, formatExpensesByDate, generatePieSeries } from "./chartFormatUtils";
// Types

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

export type SeriesItem = {
  name: string;
  color: string;
};

export type PieSeriesItem = {
  name: string,
  value: number,
  color: string,
}


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
export function groupExpensesByDateAndCateogry(expenses: Expense[], fill = true): ExpensesByDateAndCategory[] {
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

// Total in categories for pie chart
export function groupByCategoriesOnly(expenses: Expense[]): PieSeriesItem[] {
    // Aggregate totals per category
    const categoryTotals = expenses.reduce<Record<string, number>>((acc, exp) => {
        acc[exp.category] = (acc[exp.category] || 0) + exp.amount;        
        return acc;
    }, {});

    return generatePieSeries(categoryTotals);


}
