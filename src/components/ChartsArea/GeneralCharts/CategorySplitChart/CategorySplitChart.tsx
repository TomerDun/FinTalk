import { PieChart } from "@mantine/charts";
import '../../ExpenseChart.css'
import type { Expense } from "../../../../stores/ProfileStore";
import { groupByCategoriesOnly } from "../../../../utils/expenseDataUtils";

export default function CategorySplitChart({ expenses }: { expenses: Expense[] }) {

    const chartData = groupByCategoriesOnly(expenses)

    return (
        <div className="expense-chart-container">
            <div className="header-row">
                <h2>Category Split</h2>
            </div>

            <div className="chart-content">
                {chartData.length ?
                    <PieChart
                        h={300}
                        data={chartData}
                        withTooltip
                        tooltipDataSource="segment"
                        withLabels
                        labelsPosition="outside"
                        labelsType="percent"
                        size={220}
                        // tooltipAnimationDuration={20}
                        tooltipProps={{ animationDuration: 500, isAnimationActive: true }}
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