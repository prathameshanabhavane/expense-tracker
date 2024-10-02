const AddTransaction = ({handleChange, handleSubmit, transactionText, transactionAmount}) => {
    return(
        <>
           <h3>Add new transaction</h3>
           <form id="form">
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" name="text" value={transactionText} placeholder="Enter text..." onChange={handleChange}/>
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type="number" id="amount" name="amount" value={transactionAmount} placeholder="Enter amount..." onChange={handleChange} />
                </div>
                <button className="btn" onClick={handleSubmit}>Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction;