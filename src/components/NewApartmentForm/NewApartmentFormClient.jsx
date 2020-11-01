import React from 'react';
import { clientFormInputs, clientInput } from './NewApartmentFormClient.styles';

export const NewApartmentsFormClient = ({ inputsValues, onInputChange, onClientInputChange, displayError }) => {
    return (
        <>               
            <h1>Client</h1>
            <div className={clientFormInputs}>
                <div className={clientInput}>
                    <label htmlFor='name'>Name</label>
                    <input id={'name'} type={'text'} value={inputsValues.client.name} onChange={onClientInputChange} autoComplete={'off'} />
                    {displayError(inputsValues.client.name)}
                </div>

                <div className={clientInput}>
                    <label htmlFor='email'>E-mail</label>
                    <input id={'email'} type={'email'} value={inputsValues.client.email} onChange={onClientInputChange} autoComplete={'off'} />
                    {displayError(inputsValues.client.email)}
                </div>

                <div className={clientInput}>
                    <label htmlFor='phone'>Phone</label>
                    <input id={'phone'} type={'tel'} value={inputsValues.client.phone} onChange={onClientInputChange} autoComplete={'off'} />
                    {displayError(inputsValues.client.phone)}
                </div>

                <div className={clientInput}>
                    <label htmlFor='contract'>Contract</label>
                    <select id={'contract'} value={inputsValues.contract} onChange={onInputChange}>
                        <option value={''}></option>
                        <option value={'Renting'}>Renting</option>
                        <option value={'Buying'}>Buying</option>
                        <option value={'Long lease'}>Long lease</option>
                    </select>
                    {displayError(inputsValues.contract)}
                </div>
            </div>
        </>
    )
}