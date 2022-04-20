import React from 'react';
import Chart from "../../Chart/Chart";
import "./ExpensesChart.css"
import {chartDataPointsDefault} from "../../../Constants/Variables";
import {cloneDeep} from "lodash";

function ExpensesChart(props) {
    const {expensesList} = props;
    let chartDataPoints = cloneDeep(chartDataPointsDefault);
    console.log(chartDataPoints)
    if (expensesList && expensesList.length > 0) {
        expensesList.forEach(expense => {
            const expenseMonth = expense?.date.getMonth(); // Starting at 0 i.e. January = 0
            const value = expense?.amount;
            chartDataPoints[expenseMonth].value += value;
        })
    }
    return (
        <div className="expenses-chart">
            <Chart dataPoints={chartDataPoints}/>
        </div>
    );
}

export default ExpensesChart;
