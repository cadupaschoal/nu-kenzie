import styles from './style.module.css'
export const TotalMoney =  ({listTransactions}) => {
    const allEntries = listTransactions.filter(transaction => {
         return transaction.transactionType === 'Entrada'
    });

    const allOuts = listTransactions.filter(transaction => {
        return transaction.transactionType === 'Despesa'
   });
   console.log(allEntries)
    const totalEntriesValue = (allEntries) => {
        const total = allEntries.map(transation => {
            const {transactionValue} = transation;
            return Number(transactionValue);
        })
        return total;
    };

    const totalOutsValue = (allOuts) => {
        const total = allOuts.map(transation => {
            const {transactionValue} = transation;
            return Number(transactionValue);
        })
        return total;
    };

     const balance = () => {
        const entries = totalEntriesValue(allEntries);
        const outs = totalOutsValue(allOuts);
        console.log(allEntries);
        console.log(allOuts)
        const entriesTotal = entries.reduce((previusValue,currentValue) => {
            return previusValue + currentValue;
        },0);

        const outsTotal = outs.reduce((previusValue,currentValue) => {
            return previusValue + currentValue;
        },0);

        return entriesTotal - outsTotal;
    }
    const finalBalance = balance();
    console.log(finalBalance);
    
    return(
        <>
        <div className={styles.total__container}>
        <h2 className='title titleThree' >Valor Total: <span>{finalBalance.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}</span></h2>
        <p className='body__text'>O valor se refere ao saldo</p>
        </div>
        </>
    );
};
