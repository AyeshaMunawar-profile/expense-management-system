import React from 'react';
import "./Chart.css"
import ChartBar from "./ChartBar/ChartBar";
import {getMaximunValueFromArray} from "../../Constants/UtilityFunctions";

function Chart(props) {
    const {dataPoints} = props;
    const valuesArray = dataPoints.map(dataPoint => {
        return dataPoint.value;
    })
    const maxValue = getMaximunValueFromArray(valuesArray)
    const getChartBars = () => {
        return dataPoints.length > 0 && dataPoints.map((dataPoint, index) => {
            const {label, value} = dataPoint
            return <ChartBar
                key={`${label}-${index}`}
                value={value}
                max={maxValue}
                label={label}/>
        })
    }
    return (
        <div className="chart">
            {getChartBars()}
        </div>
    );
}

export default Chart;
