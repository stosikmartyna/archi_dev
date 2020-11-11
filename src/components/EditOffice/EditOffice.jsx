import React from 'react';
import { Header } from '../../uiComponents/Header';
import { InputText } from '../../uiComponents/InputText';
import { InputNumber } from '../../uiComponents/InputNumber';
import { InputSelect } from '../../uiComponents/InputSelect';
import { Button } from '../../uiComponents/Button';
import { locationOptions, statusOptions, typeOptions } from './EditOffice.constants';
import { officeFormInputs} from './EditOffice.styles';

export const EditOffice = () => {
    return (
        <>
            <Header size={'medium'} margin={'1.5'}>Edit office</Header>
            <form>
                <div className={officeFormInputs}>
                    <InputText 
                        label={'Office ID'}
                        id={'id'}
                        type={'text'}
                    />

                    <InputNumber 
                        label={'Floor'}
                        id={'floor'}
                        decimalScale={0}
                    />

                    <InputNumber 
                        label={'Area (m²)'}
                        id={'area'}
                        decimalScale={2}
                    />

                    <InputSelect 
                        label={'Location'}
                        id={'location'}
                        options={locationOptions}
                    /> 

                    <InputNumber 
                        label={'Price (p/m)'}
                        id={'price'}
                        decimalScale={3}
                    />

                    <InputSelect 
                        label={'Status'}
                        id={'status'}
                        options={statusOptions}
                    />

                    <InputSelect 
                        label={'Type'}
                        id={'type'}
                        options={typeOptions}
                    /> 

                    <InputNumber 
                        label={'Offices N°'}
                        id={'officesNo'}
                        decimalScale={0}
                    />

                </div>
                <Button>
                    Submit
                </Button>
            </form>
        </>
    )
}