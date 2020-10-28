import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { form } from './NewApartmentForm.styles';

const initialState = {
    number: '',
    area: '',
    floor: '',
    rooms: '',
}

export const NewApartmentForm = () => {
    const [inputsValues, setInputsValues] = useState(initialState);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleInputChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value})
    }

    const submitForm = (event) => {
        event.preventDefault();
        
        const isFormValid = inputsValues.number.trim() !== ''
            && inputsValues.area.trim() !== ''
            && inputsValues.floor.trim() !== '' 
            && inputsValues.rooms.trim() !== ''

        const validateForm = () => {
            alert('Sent correctly');
            setInputsValues(initialState);
            setIsFormSubmitted(false);
        }    
        
        setIsFormSubmitted(true);
        isFormValid && validateForm();
    }

    const displayError = (value) => {
        const isNotValid = isFormSubmitted && value.trim() === '';

        if (isNotValid) {
            return <span>This field is required</span>
        }
    }

    return (
        <>
            <h1>New apartment</h1>
            <form className={form} onSubmit={submitForm}>
                <label htmlFor='number'>Number</label>
                <NumberFormat 
                    id={'number'}
                    value={inputsValues.number} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
                {displayError(inputsValues.number)}
            
                <label htmlFor='floor'>Floor</label>
                <NumberFormat 
                    id={'floor'}
                    value={inputsValues.floor} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
                {displayError(inputsValues.floor)}
                
                <label htmlFor='area'>Area (m²)</label>
                <NumberFormat
                    id={'area'}
                    value={inputsValues.area} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={2}
                />
                {displayError(inputsValues.area)}
                
                <label htmlFor='rooms'>Rooms N°</label>
                <NumberFormat 
                    id={'rooms'}
                    value={inputsValues.rooms}
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
                {displayError(inputsValues.rooms)}
                
                <button>Submit</button>
            </form>
        </>
    )
}