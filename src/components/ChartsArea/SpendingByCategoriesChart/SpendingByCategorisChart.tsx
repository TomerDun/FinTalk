import { AreaChart, BarChart } from "@mantine/charts";
import '../ExpenseChart.css'
import type { Expense } from "../../../stores/ProfileStore";
import { groupExpensesByDateAndCateogry } from "../../../utils/expenseDataUtils";
import { generateSeries } from "../../../utils/hooks/chartFormatUtils";

export default function SpendingByCategoriesChart({ expenses }: { expenses: Expense[] }) {

    const chartData = groupExpensesByDateAndCateogry(expenses, true)    
    const chartSeries = generateSeries(chartData, ['date']);

    return (
        <div className="expense-chart-container">
            <div className="header-row">
                <h2>Spending By Category</h2>
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