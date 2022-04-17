import React from 'react';
import "./ChartBar.css"

function ChartBar(props) {
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner"></div>
            <div className="chart-bar__fill"></div>
            <div className="chart-bar__label"></div>
        </div>
    );
}

export default ChartBar;
