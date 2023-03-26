import { useState } from "react";
import styles from './style.module.css';

export const Form = ({listTransactions,setListTransactions, addNewTransaction}) => {
    const [formData, setFormData] = useState({
        id:'',
        transactionValue: '',
        transactionDescription: '',
        transactionType: '',
    });

    const submit = (event) => {
        event.preventDefault();
        const {transactionDescription,transactionValue,transactionType} = formData;
        const empty = (transactionDescription === '' || transactionValue === '' || transactionType === 'tipo');
        {empty ? alert('Preencha todos os campos para realizar a transação') : 
        addNewTransaction(formData);
        setFormData({
            transactionValue: '',
            transactionDescription: '',
            transactionType: 'tipo',
        });};
        

    };

    return(
        <form className={styles.form} onSubmit={submit}>
           <fieldset className="form" >
            <label className="body__text" htmlFor="description">Descrição</label>
            <input maxLength="25" className="input" type="text" value={formData.transactionDescription} placeholder="Digite aqui sua descrição" name="description" onChange={(e) => setFormData({...formData, transactionDescription: e.target.value})}/>
            <p>Ex: compra de roupas</p>
           </fieldset>
           <fieldset className="form" >
            <label className="body__text" htmlFor="value">Valor(R$)</label>
            <input className="input" type="text" value={formData.transactionValue} placeholder="1" name="value" onChange={(e) => setFormData({...formData, transactionValue: e.target.value})}/>
           </fieldset>
           <fieldset className="form" >
            <label className="body__text" htmlFor="select">Tipo de valor</label>
            <select className="select" name="select" onChange={(e) => setFormData({...formData,transactionType: e.target.value})} value = {formData.transactionType}>
                <option value="tipo">Selecione</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
           </fieldset>
           <button className="button button__insert" type="submit">Inserir Valor</button>
        </form>
    )
}