import React from 'react';
import { Header } from '../../uiComponents/Header';
import { InputDate } from '../../uiComponents/InputDate';
import { InputNumber } from '../../uiComponents/InputNumber';
import { InputText } from '../../uiComponents/InputText';
import { clientContainer, companyDataContainer, clientContractContainer, representativeDataContainer } from './EditOffice.styles';

export const EditOfficeClientData = ({editingOffice, onClientDataChange}) => {
    return (
        <div className={clientContainer}>
            <Header size={'small'} margin={'1.5'}>Company data</Header>
            <div className={companyDataContainer}>
                <InputText
                    type={'text'}
                    label={'Name'}
                    id={'companyName'}
                    value={editingOffice.client.companyName}
                    onChange={onClientDataChange}
                />
                <InputText
                    type={'phone'}
                    label={'Phone'}
                    id={'companyPhone'}
                    value={editingOffice.client.phoneNumber}
                    onChange={onClientDataChange}
                />
                <InputText
                    type={'mail'}
                    label={'Email'}
                    id={'companyEmail'}
                    value={editingOffice.client.companyEmail}
                    onChange={onClientDataChange}
                />
                <InputNumber
                    label={'Number'}
                    id={'companyNumber'}
                    decimalScale={0}
                    value={editingOffice.client.companyNumber}
                    onChange={onClientDataChange}
                />
                <InputText
                    type={'text'}
                    label={'Type'}
                    id={'companyType'}
                    value={editingOffice.client.companyType}
                    onChange={onClientDataChange}
                />
                <InputText
                    type={'text'}
                    label={'Address'}
                    id={'companyAddress'}
                    value={editingOffice.client.companyAddress}
                    onChange={onClientDataChange}
                    placeholder={'Street, postcode, country'}
                />
            </div>

            <Header size={'small'} margin={'1.5'}>Company Representative</Header>
            <div className={representativeDataContainer}>
                <InputText
                    type={'text'}
                    label={'Name'}
                    id={'representativeName'}
                    value={editingOffice.client.representativeName}
                    onChange={onClientDataChange}
                />
                <InputText
                    type={'phone'}
                    label={'Phone'}
                    id={'representativePhone'}
                    value={editingOffice.client.representativePhone}
                    onChange={onClientDataChange}
                />
                <InputText
                    type={'mail'}
                    label={'Email'}
                    id={'representativeEmail'}
                    value={editingOffice.client.representativeEmail}
                    onChange={onClientDataChange}
                />
            </div>

            {editingOffice.status === 'Unavailable' && (
                <>
                    <Header size={'small'} margin={'1.5'}>Contract</Header>
                    <div className={clientContractContainer}>
                        <InputDate
                            label={'From'}
                            id={'contractDataFrom'}
                            value={editingOffice.client.contractDataFrom}
                            onChange={onClientDataChange}
                        />
                        <InputDate
                            label={'To'}
                            id={'contractDataTo'}
                            value={editingOffice.client.contractDataTo}
                            onChange={onClientDataChange}
                        />
                    </div>
                </>
            )}
            

        </div>
    )
}