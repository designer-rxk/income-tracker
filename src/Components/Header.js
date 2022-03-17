import React from "react";

function Header({totalIncome}){
    return(
        <header>
            <h1>Income Tracker</h1>
            <div className={"total-income"}>Total: {totalIncome}€</div>
        </header>
    );
}
export default Header;