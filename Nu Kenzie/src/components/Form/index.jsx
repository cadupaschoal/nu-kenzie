import { useState } from "react";

export const Form = ({listTransactions,setListTransactions, addNewTransaction}) => {
    const [formData, setFormData] = useState({
        id:"",
        transactionValue: "",
        transactionDescription: "",
        transactionType: "",
    });

    const submit = (event) => {
        event.preventDefault();
        addNewTransaction(formData);
        setFormData({
            transactionValue: "",
            transactionDescription: "",
            transactionType: "",
        });

    }

    return(
        <form onSubmit={submit}>
           <fieldset>
            <label htmlFor="description">Descrição</label>
            <input type="text" value={formData.transactionDescription} placeholder="Digite aqui sua descrição" name="description" onChange={(e) => setFormData({...formData, transactionDescription: e.target.value})}/>
            <p>Ex: compra de roupas</p>
           </fieldset>
           <fieldset>
            <label htmlFor="value">Valor(R$)</label>
            <input type="text" value={formData.transactionValue} placeholder="Digite aqui sua descrição" name="value" onChange={(e) => setFormData({...formData, transactionValue: e.target.value})}/>
           </fieldset>
           <fieldset>
            <select onChange={(e) => setFormData({...formData,transactionType: e.target.value})}>
                <option value="tipo">Tipo de transação</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
           </fieldset>
           <button type="submit">Inserir Valor</button>
        </form>
    )
}