const TransnctionList = ({transactions, handleDelete}) => {
    return(
        <>
        <h3>History</h3>
        <ul id="list" className="list">
            {transactions.map((transaction, index) => (
                <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
                    {transaction.text} <span>${transaction.amount}</span><button className="delete-btn" onClick={(e) => handleDelete(e, transaction.id)}>x</button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default TransnctionList;