import React from 'react';
import "./Header.css"

function Header(props) {
    const moveToExpenseTrackingArea = () => {
        const trackingArea = document.getElementById("expense-tracking-area");
        trackingArea.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
    }
    return (
        <div className={"header"}>
            <div className="header-background"/>
            <div className="header-content">
                <h1 className={"main-heading text-color-grey-3"}>Expense Management System</h1>
                <h3 className={"paragraph text-bolder text-color-blue-0"}>Keep track of your monthly and yearly expenses
                    without any hassle !</h3>
                <button className="header-btn" onClick={moveToExpenseTrackingArea}>
                    <span className={"arrow-icon"}>&#10162;</span>
                </button>
            </div>
        </div>
    );
}

export default Header;
