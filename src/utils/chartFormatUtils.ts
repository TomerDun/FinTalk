import type { ExpensesByDateAndCategory, ExpensesByDateData, ExpensesByDates, PieSeriesItem, SeriesItem } from "./expenseDataUtils";



export function formatExpensesByDate(aggregated: ExpensesByDates): ExpensesByDateData[] {
  return Object.entries(aggregated).map(([date, amount]) => ({
    date,
    amount,
  }));
}

export function fillMissingCategories(expenses: ExpensesByDateAndCategory[]): ExpensesByDateAndCategory[] {
  // Step 1: Find all unique categories
  const categories = new Set<string>();

  expenses.forEach(exp => {
    Object.keys(exp).forEach(key => {
      if (key !== 'date') categories.add(key);
    });
  });

  const allCategories = Array.from(categories);

  // Step 2: Fill missing categories with 0
  return expenses.map(exp => {
    const filled: ExpensesByDateAndCategory = { date: exp.date };
    allCategories.forEach(cat => {
      filled[cat] = (exp[cat] as number) || 0;
    });
    return filled;
  });
}


function getRandomColor(): string {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
}


export function generateSeries(data: ExpensesByDateAndCategory[], exclude: string[] = []): SeriesItem[] {
  const categories = new Set<string>();

  // Collect all unique keys except excluded ones
  data.forEach(row => {
    Object.keys(row).forEach(key => {
      if (!exclude.includes(key)) {
        categories.add(key);
      }
    });
  });

  // Build series array
  return Array.from(categories).map(name => ({
    name,
    color: getRandomColor(),
  }));
}

export function generatePieSeries(data: Record<string, number>): PieSeriesItem[] {
  return Object.entries(data).map(([k, v]) => ({
    name: k,
    value: v,
    color: getRandomColor(),
  }));
}