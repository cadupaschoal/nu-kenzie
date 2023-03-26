import styles from './style.module.css';
export const List = ({listTransactions,removeTransaction}) => {

   return(
    <>
    <h3 className={styles.summary} >Resumo financeiro</h3>
    {/* <button className="button button__delete" onClick={() => console.log(listTransactions)}>debug</button> */}
    <ul className={styles.list}>
        {listTransactions.length === 0 ? <li><h2 className={styles.none}>Você ainda não possui nenhum lançamento</h2></li> 
        : listTransactions.map((transaction,index) =>{
            const {transactionType,transactionValue,transactionDescription} = transaction;
            (transaction.id = index);
            return (
                <li className={styles.card} key={transaction.id} >
                    {transactionType === 'Entrada' ? <div className={styles.signal__green}></div>
                        : <div className={styles.signal__grey}></div> }
                    <div className={styles.data__container}>
                        <div className={styles.left}>
                            <h2>{transactionDescription}</h2>
                            <p>{transactionType}</p>
                        </div>
                        <div className={styles.rigth}>
                            <p>{Number(transactionValue).toLocaleString('pt-br',{style:'currency',currency:'BRL'}) }</p>
                            <button className='button button__delete' onClick={() => removeTransaction(transaction.id)}>Excluir</button>
                        </div>
                    </div>
                </li>
            )
        })}
    </ul>
    </>
   )
}