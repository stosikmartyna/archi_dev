import React from 'react';
import { Header } from '../../uiComponents/Header';
import { InputDate } from '../../uiComponents/InputDate';
import { InputNumber } from '../../uiComponents/InputNumber';
import { InputText } from '../../uiComponents/InputText';
import { clientContainer, clientDataContainer, clientAddressContainer, clientContractContainer} from './EditOffice.styles';

export const EditOfficeClientData = () => {
    return (
        <div className={clientContainer}>
            <Header size={'small'} margin={'1.5'}>Client data</Header>
            <div className={clientDataContainer}>
                <InputText
                    type={'text'}
                    label={'Company name'}
                    id={'companyName'}
                />
                <InputText
                    type={'phone'}
                    label={'Telephone number'}
                    id={'telephoneNumber'}
                />
                <InputText
                    type={'mail'}
                    label={'Email address'}
                    id={'emailAddress'}
                />
                <InputNumber
                    label={'Company number'}
                    id={'companyNumber'}
                    decimalScale={0}
                />
                <InputText
                    type={'text'}
                    label={'Company type'}
                    id={'companyType'}
                />
            </div>    
                
            <Header size={'small'} margin={'1.5'}>Register address</Header>
            <div className={clientAddressContainer}>
                <InputText
                    type={'text'}
                    label={'Street'}
                    id={'street'}
                />
                <InputText
                    type={'text'}
                    label={'City'}
                    id={'city'}
                />
                <InputText
                    type={'text'}
                    label={'Post code'}
                    id={'postCode'}
                />
                <InputText
                    type={'text'}
                    label={'Country'}
                    id={'country'}
                />
            </div>

            <Header size={'small'} margin={'1.5'}>Contract</Header>
            <div className={clientContractContainer}>
                <InputDate
                    label={'From'}
                    id={'dataFrom'}
                />
                <InputDate
                    label={'To'}
                    id={'dataTo'}
                />
            </div>
        </div>
    )
}