import { AreaChart } from "@mantine/charts";
import '../ExpenseChart.css'
import { observer } from "mobx-react-lite";
import { profileStore } from "../../../stores/ProfileStore";
import { groupExpensesByDate } from "../../../utils/expenseDataUtils";

function ProfileTotalSpendingChart() {

    const chartData = profileStore.expenses ? groupExpensesByDate(profileStore.expenses) : null
    console.log(chartData);
    

    const chartSeries = [
        { name: 'amount', color: 'indigo.6' }
    ]

    console.log('Chart DATA: ', chartData);


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

export default observer(ProfileTotalSpendingChart)