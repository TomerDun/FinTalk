import { AreaChart } from "@mantine/charts";
import '../ExpenseChart.css'
import { observer } from "mobx-react-lite";
import { profileStore } from "../../../stores/ProfileStore";
import { groupExpensesByDate, groupExpensesByDateAndCateogry } from "../../../utils/expenseDataUtils";

function ProfileTotalSpendingChart() {

    const chartData = profileStore.expenses ? groupExpensesByDate(profileStore.expenses) : null
    console.log(chartData);
    

    const chartSeries = [
        { name: 'amount', color: '#000000' }
    ]

    console.log('Chart DATA: ', chartData);


    return (
        <div className="expense-chart-container">
            <div className="header-row">
                <h2>Total Spending Chart</h2>
                <button onClick={() => console.log(groupExpensesByDateAndCateogry(profileStore.expenses))}>Data</button>
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