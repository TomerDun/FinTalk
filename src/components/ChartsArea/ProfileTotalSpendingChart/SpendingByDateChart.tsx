import { AreaChart } from "@mantine/charts";
import '../ExpenseChart.css'
import type { Expense } from "../../../stores/ProfileStore";
import { groupExpensesByDate, groupExpensesByDateAndCateogry } from "../../../utils/expenseDataUtils";

export default function SpendingByDateChart({ expenses }: { expenses: Expense[] }) {

    const chartData = groupExpensesByDate(expenses);

    const chartSeries = [
        { name: 'amount', color: 'indigo.6' }
    ]

    return (
        <div className="expense-chart-container">
            <div className="header-row">
                <h2>Total Spending Chart</h2>                
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
        </div>

    )
}