import { AreaChart } from "@mantine/charts";
import '../ExpenseChart.css'
import type { Expense } from "../../../stores/ProfileStore";
import { groupExpensesByDateAndCateogry } from "../../../utils/expenseDataUtils";
import { generateSeries } from "../../../utils/chartFormatUtils";

export default function SpendingByCategoriesChart({ expenses }: { expenses: Expense[] }) {

    const chartData = groupExpensesByDateAndCateogry(expenses, true)
    const chartSeries = generateSeries(chartData, ['date']);

    return (
        <div className="expense-chart-container">
            <div className="header-row">
                <h2>Spending By Category</h2>
            </div>

            <div className="chart-content">
                {chartData.length ?
                    <AreaChart
                        h={300}
                        data={chartData}
                        dataKey="date"
                        series={chartSeries}
                        curveType="linear"
                        gridAxis="xy"
                        type="default"
                    />
                    :
                    <div className="no-data-container">
                        <h2 className="no-data-text">No Data..</h2>
                    </div>
                }
            </div>
        </div>

    )
}