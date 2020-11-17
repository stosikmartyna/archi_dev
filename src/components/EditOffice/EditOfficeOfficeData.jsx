import React from 'react';
import { Button } from '../../uiComponents/Button';
import { Header } from '../../uiComponents/Header';
import { InputNumber } from '../../uiComponents/InputNumber';
import { InputSelect } from '../../uiComponents/InputSelect';
import { InputText } from '../../uiComponents/InputText';
import { locationOptions, statusOptions, typeOptions } from './EditOffice.constants';
import { formContainer, inputsContainer, inputsContainerLarge, statusContainer } from './EditOffice.styles';

export const EditOfficeOfficeData = ({submitForm, editingOffice, validateForm, onEditOfficeChange, isAvailable}) => {
    return (
        <form className={formContainer} onSubmit={submitForm}>
        <Header size={'medium'} margin={'1.5'}>Edit office</Header>
            <div className={isAvailable ? inputsContainer : inputsContainerLarge}>
                <div className={statusContainer}>
                    <Header size={'small'} margin={'1.5'}>Change status to provide client data:</Header>
                    <InputSelect 
                        label={'Status'}
                        id={'status'}
                        value={editingOffice.status}
                        options={statusOptions}
                        onChange={onEditOfficeChange}
                    />
                </div>
                <InputText
                    label={'Office ID'}
                    id={'id'}
                    type={'text'}
                    value={editingOffice.id}
                    onChange={onEditOfficeChange}
                    error={validateForm(editingOffice.id)}
                />
                <InputNumber 
                    label={'Floor'}
                    id={'floor'}
                    value={editingOffice.floor}
                    decimalScale={0}
                    onChange={onEditOfficeChange}
                    error={validateForm(editingOffice.floor)}
                />
                <InputNumber 
                    label={'Area (m²)'}
                    id={'area'}
                    value={editingOffice.area}
                    decimalScale={2}
                    onChange={onEditOfficeChange}
                    error={validateForm(editingOffice.area)}
                />
                <InputSelect 
                    label={'Location'}
                    id={'location'}
                    value={editingOffice.location}
                    options={locationOptions}
                    onChange={onEditOfficeChange}
                    error={validateForm(editingOffice.location)}
                /> 
                <InputNumber 
                    label={'Price (p/m)'}
                    id={'price'}
                    value={editingOffice.price}
                    decimalScale={3}
                    onChange={onEditOfficeChange}
                    error={validateForm(editingOffice.price)}
                />
                <InputSelect 
                    label={'Type'}
                    id={'type'}
                    value={editingOffice.type}
                    options={typeOptions}
                    onChange={onEditOfficeChange}
                    error={validateForm(editingOffice.type)}
                />
                {editingOffice.type === 'Shared offices' && 
                    (
                        <InputNumber 
                            label={'Offices N°'}
                            id={'officesNo'}
                            value={editingOffice.officesNo}
                            decimalScale={0}
                            onChange={onEditOfficeChange}
                            error={validateForm(editingOffice.officesNo)}
                        />
                    )
                }
            </div>
            {isAvailable && (
                <Button>
                    Submit
                </Button>
            )}
        </form>
    )
}