
export const TotalMoney =  ({listTransactions}) => {
    const allEntries = listTransactions.filter(transaction => {
         return transaction.transactionType === 'Entrada'
    });

    const allOuts = listTransactions.filter(transaction => {
        return transaction.transactionType === 'Despesa'
   });

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

        const entriesTotal = entries.reduce((previusValue,currentValue) => {
            return previusValue + currentValue;
        },0);

        const outsTotal = outs.reduce((previusValue,currentValue) => {
            return previusValue + currentValue;
        },0);

        return entriesTotal - outsTotal
    }

    const finalBalance = balance()
    
    return(
        <>
        <h2>Valor Total: {finalBalance.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}</h2>
        <p>O valor se refere ao saldo</p>
        </>
    )
}