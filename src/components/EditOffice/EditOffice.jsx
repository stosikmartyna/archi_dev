import React, { useEffect, useState } from 'react';
import { Header } from '../../uiComponents/Header';
import { InputText } from '../../uiComponents/InputText';
import { InputNumber } from '../../uiComponents/InputNumber';
import { InputSelect } from '../../uiComponents/InputSelect';
import { Button } from '../../uiComponents/Button';
import { locationOptions, statusOptions, typeOptions } from './EditOffice.constants';
import { officeFormInputs} from './EditOffice.styles';
import { useOffices } from '../../hooks/useOffices';
import { useLocation } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';

const initialState = {
    id: '',
    floor: '',
    area: '',
    location: '',
    price: '',
    type: '',
    officesNo: '',
    status: '',
    created: {user: '', date: ''},
    contract: '',
}

export const EditOffice = () => {
    const [inputsValues, setInputsValues] = useState(initialState);

    const {isFetching, getSingleOffice, editingOffice} = useOffices();
    const pathname = useLocation().pathname;
    const officeKey = pathname.replace('/edit-office/', '')
    // temporary solution - TODO: get officeID as url param 

    const handleInputChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value})
    }
    useEffect(() => {
        getSingleOffice(officeKey);
    }, [getSingleOffice, officeKey]);

    return (
        <>
            <Header size={'medium'} margin={'1.5'}>Edit office</Header>
            {isFetching && <Spinner />}
            {editingOffice && (
                <form>
                    <div className={officeFormInputs}>
                        <InputText 
                            label={'Office ID'}
                            id={'id'}
                            type={'text'}
                            value={editingOffice.id}
                            onChange={handleInputChange}
                        />

                        <InputNumber 
                            label={'Floor'}
                            id={'floor'}
                            value={editingOffice.floor}
                            decimalScale={0}
                            onChange={handleInputChange}
                        />

                        <InputNumber 
                            label={'Area (m²)'}
                            id={'area'}
                            value={editingOffice.area}
                            decimalScale={2}
                            onChange={handleInputChange}
                        />

                        <InputSelect 
                            label={'Location'}
                            id={'location'}
                            value={editingOffice.location}
                            options={locationOptions}
                            onChange={handleInputChange}
                        /> 

                        <InputNumber 
                            label={'Price (p/m)'}
                            id={'price'}
                            value={editingOffice.price}
                            decimalScale={3}
                            onChange={handleInputChange}
                        />

                        <InputSelect 
                            label={'Status'}
                            id={'status'}
                            value={editingOffice.status}
                            options={statusOptions}
                            onChange={handleInputChange}
                        />

                        <InputSelect 
                            label={'Type'}
                            id={'type'}
                            value={editingOffice.type}
                            options={typeOptions}
                            onChange={handleInputChange}
                        /> 

                        <InputNumber 
                            label={'Offices N°'}
                            id={'officesNo'}
                            value={editingOffice.officesNo}
                            decimalScale={0}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Button>
                        Submit
                    </Button>
                </form>
            )}
        </>
    )
}