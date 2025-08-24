import { AreaChart } from "@mantine/charts";
import '../../ExpenseChart.css'
import type { Expense } from "../../../../stores/ProfileStore";
import { groupExpensesByDate } from "../../../../utils/expenseDataUtils";
import { useEffect, useState } from "react";
import { fetchAllExpenses } from "../../../../utils/apiUtils/expenseApiUtils";
import { Select } from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";


const mockCategories = [
    'Food',
    'Entertainment',
    'Household'
]

export default function SpendingInCategoryChart() {

    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

    useEffect(() => {
        getExpenses();
    }, [categoryFilter])


    async function getExpenses() {
        // TODO: Add error handling
        const newExpenses = await fetchAllExpenses('category', categoryFilter);
        setExpenses(newExpenses)
    }

    const chartData = expenses.length ? groupExpensesByDate(expenses) : null;

    const chartSeries = [
        { name: 'amount', color: 'rgb(16,185,129)' }
    ]

    return (
        <div className="expense-chart-container">
            <div className="header-row">
                <h2>Total Spending In {categoryFilter}</h2>
            </div>

            {chartData &&
                <div className="chart-content">
                    <AreaChart
                        h={300}
                        data={chartData}
                        dataKey="date"
                        series={chartSeries}
                        curveType="linear"
                    />
                </div>
            }

            <div className="filter-row">
                <div className="icon-label">
                    <IconFilter size={16} />
                    <p>Category:</p>
                </div>
                <Select
                    searchable
                    value={categoryFilter}                    
                    data={mockCategories}
                    placeholder="Category"
                    w={"90%"}
                    clearable
                    onChange={setCategoryFilter}
                />
            </div>
        </div>

    )
}