import React, { useState, useEffect } from 'react'
import { BLACK_COLOR } from '../common/Colors'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal';
import { Delete, } from '../actions/BankingActions'
import Withdraw from './Withdraw'
import DeleteAccount from './DeleteAccount';
import CollectInterest from './CollectInterest'
export default function Deposit() {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()
    const [displayTime, setDisplayTime] = useState("")
    const [openModal, setOpenmodal] = useState(false)
    const [errorrMessages, setErrorrMessages] = useState("")
    const [successMessage, setSuccessMessage] = useState('')
    const [ShowViews, setShowViews] = useState("sampe")
    const displayData = useSelector((state) => state)
    const [balanceMessage, setBalanceMessage] = useState(false)
    const [dataAmount, setdataAmount] = useState("")
    const handleDeposit = () => {
        console.log('hi')
        let details = dispatch({ type: "DEPOSIT", amount: parseInt(amount) })
        console.log(details.amount !== null)
        console.log(details, 'details')
        if (details.amount) {

            let time = new Date();
            let dateTodisplay = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
            setDisplayTime(dateTodisplay)
            console.log(dateTodisplay, 'dateTodisplay')
            setSuccessMessage(`You Deposited ${details.amount}`)

        }
        else {

            setErrorrMessages("Please Enter AMOUNT!")
        }



    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setOpenmodal(false);
    }

    // const local_storage_key = "storedBankData"

    // useEffect(() => {
    //     const storedBankData = JSON.parse(localStorage.getItem(local_storage_key))
    //     setAmount(storedBankData)
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem(local_storage_key, JSON.stringify(amount))
    // }, [amount])
    const handleWithdraw = () => {
        if (dataAmount.length !== 0) {
            dispatch({ type: "WITHDRAW", amount: parseInt(amount) })
            setBalanceMessage(true)
        }

    }
    const WithdrawAmount = (e) => {
        setdataAmount(e.target.value)
    }
    const DeleteBankAccount = () => {
        dispatch({
            type: 'DELETE_ACCOUNT'
        })
        alert('Account has been succesfully deleted')
        window.location.reload();

        console.log('fired')
    }
    console.log(amount, 'amount')
    const handleInteres = () => {
        dispatch({ type: "COLLECT_INTEREST" })
    }
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Bank Account</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => setShowViews("Deposit")} >Deposit</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  " onClick={() => setShowViews("Withdraw")}>Withdraw</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >Change account type</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " onClick={() => setShowViews("Delete")} >Delete Account</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link " onClick={() => setShowViews("CollectInterest")}  >Collect Interest</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </nav>

            {ShowViews === 'Withdraw' && <Withdraw amount={amount}
                dataAmount={dataAmount}
                handleWithdraw={handleWithdraw}
                WithdrawAmount={WithdrawAmount}
                balanceMessage={balanceMessage} />}
            {ShowViews === 'Deposit' && <div>
                <h1 class="display-4">Enter your amount to deposit</h1>
                <input type="text"
                    className="form-control"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value)
                        setErrorrMessages('')
                    }}
                />
                {successMessage && <div class="alert alert-success mt-3" role="alert">
                    {successMessage}
                </div>}
                {errorrMessages && <div class="alert alert-danger mt-3" role="alert">
                    {errorrMessages}
                </div>}
                <div className="btn-wrappers d-flex mb-5 mt-5">
                    <button className="btn btn-success" onClick={() => setOpenmodal(!openModal)}>Deposit History</button>

                    <button className="btn btn-primary ml-4" onClick={handleDeposit} color={BLACK_COLOR}>Deposit</button>
                </div>
            </div>
            }
            {ShowViews === 'Delete' && <DeleteAccount DeleteBankAccount={DeleteBankAccount} />}
            {ShowViews === 'CollectInterest' && <CollectInterest handleInteres={handleInteres} displayData={displayData} />}
            <Modal
                isOpen={openModal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Your Deposit History</h4>
                            <h2>{displayTime}</h2>
                        </div>
                        <div className="col-md-6">
                            <h4>Your Deposit Amount</h4>
                            <h2>{amount}</h2>
                        </div>
                    </div>
                </div>

                <button onClick={closeModal} className="btn btn-success">close</button>
            </Modal>

        </div>
    )
}
