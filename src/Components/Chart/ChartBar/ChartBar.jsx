import React from 'react';
import "./ChartBar.css"

function ChartBar(props) {
    const {label, value, max} = props;
    let chartBarFillHeight = '0%';
    if (max > 0) {
        chartBarFillHeight = `${Math.round((value / max) * 100)}%`
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill"
                     style={{height: chartBarFillHeight}}/>
            </div>
            <div className="chart-bar__label"><h3 className="heading">{label}</h3></div>
        </div>
    );
}

export default ChartBar;
