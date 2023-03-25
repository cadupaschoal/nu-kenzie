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
        /* criar condicional para campos vazios */
        const {transactionDescription,transactionValue,transactionType} = formData;
        const empty = (transactionDescription === '' || transactionValue === '' || transactionType === 'tipo');
        {empty ? alert('Preencha todos os campos para realizar a transação') : 
        addNewTransaction(formData);
        setFormData({
            transactionValue: '',
            transactionDescription: '',
            transactionType: 'tipo',
        });}
        

    }

    return(
        <form className={styles.form} onSubmit={submit}>
           <fieldset className="form" >
            <label className="body__text" htmlFor="description">Descrição</label>
            <input className="input" type="text" value={formData.transactionDescription} placeholder="Digite aqui sua descrição" name="description" onChange={(e) => setFormData({...formData, transactionDescription: e.target.value})}/>
            <p>Ex: compra de roupas</p>
           </fieldset>
           <fieldset className="form" >
            <label className="body__text" htmlFor="value">Valor(R$)</label>
            <input className="input" type="text" value={formData.transactionValue} placeholder="Digite aqui sua descrição" name="value" onChange={(e) => setFormData({...formData, transactionValue: e.target.value})}/>
           </fieldset>
           <fieldset className="form" >
            <select className="select" onChange={(e) => setFormData({...formData,transactionType: e.target.value})} value = {formData.transactionType}>
                <option value="tipo">Tipo de transação</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
           </fieldset>
           <button className="button button__insert" type="submit">Inserir Valor</button>
        </form>
    )
}