import React, { useState } from 'react'
import { BLACK_COLOR } from '../common/Colors'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal';
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
    const displayData = useSelector((state) => state)
    const [errorrMessages, setErrorrMessages] = useState("")
    const [successMessage, setSuccessMessage] = useState('')
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

    console.log(amount, 'amount')
    return (
        <div className="container">
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
            {/* <p> you Deposited  {displayData}</p> */}
            <div className="btn-wrappers d-flex ">
                <button className="btn btn-success" onClick={() => setOpenmodal(!openModal)}>Deposit History</button>

                <button className="btn btn-primary ml-4" onClick={handleDeposit} color={BLACK_COLOR}>Deposit</button>
            </div>

            <Modal
                isOpen={openModal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <h4>Your Deposit History</h4>
                    <h2>{displayTime}</h2>

                </div>

                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    )
}
