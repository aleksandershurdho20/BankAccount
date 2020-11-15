

const initialState = 0;
export const BankingReducers = (state = initialState, action) => {
    switch (action.type) {
        case "DEPOSIT":
            return state + action.amount

        case "WITHDRAW":
            return state - action.amount;

        case "COLLECT_INTEREST":
            return state * 1.03;
        case "DELETE_ACCOUNT":
            return 0
        // if the cases dont match return old state
        default: return state

    }
    // return the old value
}



//Actions
const deposit = {
    type: "DEPOSIT",
    amount: '500'
}
console.log(deposit, 'depozita')
const withdraw = {
    type: "WITHDRAW",
    amount: '300'

}
console.log(withdraw)

const collectInteres = {
    type: 'COLLECT_INTEREST'
}

const deleteAccount = {
    type: 'DELETE'
}