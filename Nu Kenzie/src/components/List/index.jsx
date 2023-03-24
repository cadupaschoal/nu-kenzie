
export const List = ({listTransactions,removeTransaction}) => {

   return(
    <>
    <h2>Lista</h2>
    <button onClick={() => console.log(listTransactions)}>debug</button>
    <ul>
    {listTransactions.map((transaction,index) =>{
        const {transactionType,transactionValue,transactionDescription} = transaction;
        (transaction.id = index);
        return (
            <li key={transaction.id} >
                <div className="left">
                    <h2>{transactionDescription}</h2>
                    <p>{Number(transactionValue).toLocaleString('pt-br',{style:'currency',currency:'BRL'}) }</p>
                </div>
                <div className="rigth">
                    <p>{transactionType}</p>
                    <button onClick={() => removeTransaction(transaction.id)}>Excluir</button>
                </div>
            </li>
    )
    })}
    </ul>
    </>
   )
}