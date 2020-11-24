import React from 'react'

export default function Withdraw({ dataAmount, amount, handleWithdraw, balanceMessage, WithdrawAmount }) {
    return (
        <div>
            <h1 class="display-4">Enter your amount to withdraw</h1>
            <input type="text"
                className="form-control"
                placeholder="Enter Amount"
                value={dataAmount}
                onChange={WithdrawAmount}
            />


            <button className="btn btn-primary mt-3 mb-4" onClick={handleWithdraw} >Withdraw</button>
            {balanceMessage && <div class="alert alert-warning alert-dismissible fade show mt-4" role="alert">
                <strong>You Withdrawed  {dataAmount}</strong> You have remaining :  {amount - dataAmount}.
                         <button type="button" class="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
        </div>
    )
}
