import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSingleOffice } from '../../hooks/useSingleOffice';
import { ROUTES } from '../../constants/routes';
import { Header } from '../../uiComponents/Header';
import { InputText } from '../../uiComponents/InputText';
import { InputNumber } from '../../uiComponents/InputNumber';
import { InputSelect } from '../../uiComponents/InputSelect';
import { Button } from '../../uiComponents/Button';
import { Spinner } from '../Spinner/Spinner';
import { locationOptions, statusOptions, typeOptions } from './EditOffice.constants';
import { container, formContainer, officeFormInputs} from './EditOffice.styles';
import { SlantedDiv } from '../../uiComponents/SlantedDiv';

export const EditOffice = () => {
    const {isFetching, editingOffice, getSingleOffice, updateSingleOffice, handleEditOfficeChange} = useSingleOffice();
    const pathname = useLocation().pathname;
    const officeKey = pathname.replace(`${ROUTES.EDIT_OFFICE}/`, '')
    // temporary solution - TODO: get officeID as url param 

    useEffect(() => {
        getSingleOffice(officeKey);
    }, [getSingleOffice, officeKey]);

    const submitForm = (event) => {
        event.preventDefault();
        updateSingleOffice(officeKey, editingOffice);
    }

    return (
        <div className={container}>
            {isFetching && <Spinner />}
            {editingOffice && (
                <form className={formContainer} onSubmit={submitForm}>
                <Header size={'medium'} margin={'1.5'}>Edit office</Header>
                    <div className={officeFormInputs}>
                        <InputText 
                            label={'Office ID'}
                            id={'id'}
                            type={'text'}
                            value={editingOffice.id}
                            onChange={handleEditOfficeChange}
                        />
                        <InputNumber 
                            label={'Floor'}
                            id={'floor'}
                            value={editingOffice.floor}
                            decimalScale={0}
                            onChange={handleEditOfficeChange}
                        />
                        <InputNumber 
                            label={'Area (m²)'}
                            id={'area'}
                            value={editingOffice.area}
                            decimalScale={2}
                            onChange={handleEditOfficeChange}
                        />
                        <InputSelect 
                            label={'Location'}
                            id={'location'}
                            value={editingOffice.location}
                            options={locationOptions}
                            onChange={handleEditOfficeChange}
                        /> 
                        <InputNumber 
                            label={'Price (p/m)'}
                            id={'price'}
                            value={editingOffice.price}
                            decimalScale={3}
                            onChange={handleEditOfficeChange}
                        />
                        <InputSelect 
                            label={'Status'}
                            id={'status'}
                            value={editingOffice.status}
                            options={statusOptions}
                            onChange={handleEditOfficeChange}
                        />
                        <InputSelect 
                            label={'Type'}
                            id={'type'}
                            value={editingOffice.type}
                            options={typeOptions}
                            onChange={handleEditOfficeChange}
                        /> 
                        <InputNumber 
                            label={'Offices N°'}
                            id={'officesNo'}
                            value={editingOffice.officesNo}
                            decimalScale={0}
                            onChange={handleEditOfficeChange}
                        />
                    </div>
                    <Button>
                        Submit
                    </Button>
                </form>
            )}
            <SlantedDiv imagePath={"/img/edit_office_form.jpg"} />
        </div>
    )
}