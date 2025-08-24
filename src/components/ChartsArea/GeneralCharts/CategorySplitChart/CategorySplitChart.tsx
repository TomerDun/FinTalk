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

            {chartData &&
                <div className="chart-content">
                    <PieChart
                        h={300}
                        data={chartData}                                                                                                                     
                    />
                </div>
            }
        </div>

    )
}