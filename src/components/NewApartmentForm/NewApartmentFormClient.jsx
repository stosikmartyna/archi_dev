import React from 'react';
import { InputSelect } from '../../uiComponents/InputSelect';
import { InputText } from '../../uiComponents/InputText';
import { clientFormInputs } from './NewApartmentForm.styles';
import { Header } from '../../uiComponents/Header';

export const NewApartmentsFormClient = ({ inputsValues, onInputChange, onClientInputChange, validateForm, contractOptions }) => {
    return (
        <>               
            <Header size={'medium'} margin={'1.5'}>Client</Header>
            <div className={clientFormInputs}>
                <InputText 
                    id={'name'}
                    type={'text'} 
                    label={'Name'}
                    value={inputsValues.client.name} 
                    onChange={onClientInputChange}
                    error={validateForm(inputsValues.client.name)}
                />

                <InputText 
                    id={'email'}
                    type={'email'} 
                    label={'Email'}
                    value={inputsValues.client.email} 
                    onChange={onClientInputChange}
                    error={validateForm(inputsValues.client.email)}
                />

                <InputText 
                    id={'phone'}
                    type={'phone'} 
                    label={'Phone'}
                    value={inputsValues.client.phone} 
                    onChange={onClientInputChange}
                    error={validateForm(inputsValues.client.phone)}
                />

                <InputSelect
                    id={'contract'}
                    label={'Contract'}
                    value={inputsValues.contract}    
                    onChange={onInputChange}
                    options={contractOptions}
                    error={validateForm(inputsValues.contract)}
                    width={255}
                />
            </div>
        </>
    )
}