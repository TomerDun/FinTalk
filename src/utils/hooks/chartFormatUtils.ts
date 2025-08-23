import type { ExpensesByDateData, ExpensesByDates } from "../expenseDataUtils";



export function formatExpensesByDate(aggregated: ExpensesByDates): ExpensesByDateData[] {
    return Object.entries(aggregated).map(([date, amount]) => ({
        date,
        amount,
    }));
}